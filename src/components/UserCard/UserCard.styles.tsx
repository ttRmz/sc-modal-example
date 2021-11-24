import styled from "styled-components";

export const UserCardName = styled.h3`
  color: black;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const UserCardButton = styled.button`
  margin-left: auto;
`;

export const UserCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 6px;
  background-color: #f9f9f9;
  transition: opacity linear 75ms;

  &:hover {
    opacity: 0.6;
  }
`;
