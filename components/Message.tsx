import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export type MessageProps = {
  title: string;
  isMessageShown?: boolean;
} & (
  | {
      onClickLater?: () => void;
      onClickOkay?: () => void;
    }
  | { error: true }
);

type UnionKeys<T> = T extends any ? keyof T : undefined;
type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, undefined>>
  : undefined;
type StrictUnion<T> = StrictUnionHelper<T, T>;

const Message: React.FC<StrictUnion<MessageProps>> = ({
  title,
  isMessageShown,
  error,
  onClickLater,
  onClickOkay,
}) => {
  if (!isMessageShown) {
    return null;
  }

  return (
    <Wrapper error={error}>
      <Container>
        <Title>{title}</Title>
        {!!onClickOkay && (
          <ButtonList>
            <Button onClick={onClickLater}>Maybe later?</Button>
            <Button primary onClick={onClickOkay}>
              Join his followers
            </Button>
          </ButtonList>
        )}
      </Container>
    </Wrapper>
  );
};

export default Message;

const appearAnimation = keyframes`
  0% {
    opacity: 0.8;
    transform: translateY(-150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

interface MessageWrapperProps {
  error?: boolean;
}

const Wrapper = styled.div<MessageWrapperProps>`
  background-color: #00a646;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  animation: ${appearAnimation} 0.5s linear;

  ${({ error }) =>
    error &&
    css`
      background-color: #e33f45;
    `};
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
  font-size: 16px;
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
