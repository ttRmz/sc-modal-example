import React from "react";
import { useModalContext } from "../../context/modal";
import {
  UserCardButton,
  UserCardName,
  UserCardWrapper,
} from "./UserCard.styles";

interface IUserCardProps {
  user: any;
}

export const UserCard: React.FC<IUserCardProps> = ({ user }) => {
  const { setModalContent, closeModal } = useModalContext();

  const openModal = (user: any) => {
    setModalContent(
      <div>
        <UserCardName>Details of {user.name.first}</UserCardName>
        <UserCardButton onClick={closeModal}>cancel</UserCardButton>
      </div>
    );
  };

  return (
    <UserCardWrapper>
      <UserCardName>{user.name.first}</UserCardName>
      <UserCardButton onClick={() => openModal(user)}>vew more</UserCardButton>
    </UserCardWrapper>
  );
};
