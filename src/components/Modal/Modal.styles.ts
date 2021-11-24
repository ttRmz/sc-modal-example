import React from "react";
import styled, { css, keyframes } from "styled-components";

interface IProps extends React.ComponentPropsWithoutRef<"div"> {
  open: boolean;
}

const modalOpen = keyframes`
 0% {
    opacity: 0;
  transform:  translate(-50%, 0%);
  }
  100% {
    opacity: 1;
   transform: translate(-50%, -50%);
  }
`;

const modalClose = keyframes`
 0% {
    opacity: 1;
   transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
   transform: translate(-50%, 0%);
  }
`;

export const ModalWrapper = styled.div<IProps>`
  position: fixed;
  z-index: 10;
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  ${({ open }) =>
    open
      ? css`
          animation: 75ms ${modalOpen} ease-out forwards;
        `
      : css`
          animation: 50ms ${modalClose} ease-in forwards;
        `}
`;

const overlayOpen = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const overlayClose = keyframes`
 0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;


export const ModalOverlay = styled.div<IProps>`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  ${({ open }) =>
    open
      ? css`
          animation: 75ms ${overlayOpen} ease-out forwards;
        `
      : css`
          animation: 50ms ${overlayClose} ease-in forwards;
        `}
`;
