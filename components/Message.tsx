import React from 'react';
import styled, { css } from 'styled-components';

const Message = () => {
  return (
    <Wrapper>
      <Container>
        <Title>👋 Junho Yeo invited you to view his GitHub profile</Title>
        <ButtonList>
          <Button>Maybe later?</Button>
          <Button primary>Join his followers</Button>
        </ButtonList>
      </Container>
    </Wrapper>
  );
};

export default Message;

const Wrapper = styled.div`
  background-color: #00a646;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
`;

const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;

  @media (max-width: 600px) {
    max-width: unset;
  }
`;

const Title = styled.span`
  color: white;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 10px;
  flex: 1;
  border-radius: 36px;
  font-weight: bold;
  cursor: pointer;

  &:first-child {
    margin-right: 16px;
  }

  ${({ primary }) =>
    !primary
      ? css`
          background-color: #57bf7b;
          color: white;
        `
      : css`
          background-color: white;
          color: #00a646;
        `};
`;
