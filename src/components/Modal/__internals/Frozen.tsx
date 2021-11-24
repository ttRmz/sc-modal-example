import React from "react";

export const Frozen = ({ children }: any) => {
  const ref = React.useRef<React.ReactNode | null>(null);

  if (children == null && ref.current !== undefined) {
    return ref.current;
  }

  ref.current = children;

  return children;
};
