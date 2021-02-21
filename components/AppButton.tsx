import React from 'react';
import styled, { css } from 'styled-components';

interface AppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  isMobile: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({ title, isMobile, ...props }) => {
  return (
    <>
      <Button isMobile={isMobile} {...props}>
        {title}
      </Button>
    </>
  );
};

export default AppButton;

interface ButtonProps {
  isMobile: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 0 auto;
  padding: 8px 20px;
  width: fit-content;
  cursor: pointer;
  background-color: #e7e3d5;
  border-radius: 9999px;
  color: #70664b;
  font-size: 16px;
  font-weight: 700;

  ${({ isMobile }) =>
    isMobile &&
    css`
      background-color: #00a646;
      color: white;
    `};
`;
