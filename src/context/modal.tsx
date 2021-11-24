import React from "react";
import { Modal } from "../components";

const NOOP = () => {};

const defaultValues = {
  open: false,
  setModalContent: NOOP,
  closeModal: NOOP,
};

interface IModalContextValues {
  open: boolean;
  setModalContent: (content: React.ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = React.createContext<IModalContextValues>(defaultValues);

export const useModalContext = () => React.useContext(ModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [content, setContent] = React.useState<React.ReactNode | null>(null);
  const [visible, setVisible] = React.useState<boolean>(false);

  const open = !!content;

  function setModalContent(content: React.ReactNode) {
    setContent(content);
    setVisible(true);
  }

  function closeModal() {
    setContent(null);
  }

  function onAnimationEnd() {
    !open && setVisible(false);
  }

  const contextValues = React.useMemo(
    () => ({
      open,
      setModalContent,
      closeModal,
    }),
    [open]
  );

  return (
    <ModalContext.Provider value={contextValues}>
      {visible && (
        <Modal
          open={open}
          onClose={closeModal}
          onAnimationEnd={onAnimationEnd}
          children={content}
        />
      )}

      {children}
    </ModalContext.Provider>
  );
};
