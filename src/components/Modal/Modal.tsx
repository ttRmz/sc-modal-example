import React from "react";
import ReactDOM from "react-dom";
import { ModalOverlay, ModalWrapper } from "./Modal.styles";
import { Frozen } from "./__internals/Frozen";

export interface IModalProps extends React.ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: (event: React.MouseEvent) => void;
}

export type ModalComponent = React.FC<IModalProps>;

export const Modal: ModalComponent = ({
  children,
  open,
  onClose,
  onAnimationEnd,
}) => {
  const mountingPoint = React.useMemo(() => document.createElement("div"), []);

  React.useLayoutEffect(() => {
    if (open) {
      document.body.appendChild(mountingPoint);
    }
    if (!open) {
      return () => {
        document.body.removeChild(mountingPoint);
      };
    }
  }, [open, mountingPoint]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay open={open} onClick={onClose} />

      <ModalWrapper
        open={open}
        onAnimationEnd={onAnimationEnd}
        children={<Frozen children={open ? children : null} />}
      />
    </>,
    mountingPoint
  );
};
