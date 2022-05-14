import React, { ReactNode, HTMLAttributes } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  theme?:
    | 'black'
    | 'white'
    | 'teal'
    | 'turquoise'
    | 'green'
    | 'lightgreen'
    | 'blue'
    | 'sky'
    | 'navy'
    | 'violet'
    | 'pink'
    | 'chakra';
  borderWidth?: string;
  borderRadius?: string;
}

const StyledButton = styled.button<Props>`
  color: ${({ variant, bgColor, theme, textColor }: Props) =>
    !theme
      ? textColor
      : variant === 'secondary' && bgColor
      ? bgColor
      : variant === 'primary' && textColor
      ? textColor
      : theme === 'white' || theme === 'teal' || theme === 'turquoise'
      ? 'black'
      : theme === 'black'
      ? '#fff'
      : null};
  background-color: ${({ variant, theme, bgColor, textColor }: Props) =>
    !theme
      ? bgColor
      : variant === 'secondary' && textColor
      ? textColor
      : variant === 'primary' && bgColor
      ? bgColor
      : theme === 'white'
      ? 'white'
      : theme === 'black'
      ? 'black'
      : theme === 'teal' && variant === 'primary'
      ? '#00DCDC'
      : theme === 'teal' && variant === 'secondary'
      ? 'transparent'
      : theme === 'turquoise' && variant === 'primary'
      ? '#40E0D0'
      : theme === 'turquoise' && variant === 'secondary'
      ? 'transparent'
      : null};
  border-color: ${({ variant, textColor, bgColor, theme }: Props) =>
    variant === 'secondary' && bgColor
      ? bgColor
      : variant === 'primary' && textColor
      ? textColor
      : theme === 'turquoise'
      ? '#40E0D0'
      : null};
  border-width: ${({ borderWidth }: Props) => borderWidth};
  border-style: solid;
  text-align: center;
  border-radius: ${({ borderRadius }: Props) => borderRadius};
  font-size: ${({ size }: Props) =>
    size === 'sm'
      ? '12px'
      : size === 'md'
      ? '14px'
      : size === 'lg'
      ? '18px'
      : size === 'xl'
      ? '22px'
      : '14px'};
  padding: ${({ size }: Props) =>
    size === 'sm'
      ? '4px 8px'
      : size === 'md' || 'lg'
      ? '5px 10px'
      : size === 'xl'
      ? '6px 12px'
      : '5px 10px'};
  transition: 100ms ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ hoverColor, variant, bgColor, theme }: Props) =>
      bgColor
        ? hoverColor
        : variant === 'secondary' && theme === 'turquoise'
        ? '#40E0D0'
        : null};
  }
  &:disabled {
    /*
    work on later.
    */
  }
`;

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  bgColor,
  textColor,
  hoverColor,
  theme,
  borderWidth = '2px',
  borderRadius = '8px',
  ...props
}: Props) => {
  return (
    <StyledButton
      css={css`
        label: vexel-ui_Button;
      `}
      onClick={onClick}
      variant={variant}
      size={size}
      bgColor={bgColor}
      textColor={textColor}
      hoverColor={hoverColor}
      theme={theme}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
