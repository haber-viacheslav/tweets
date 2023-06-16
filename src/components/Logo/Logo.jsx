import { LogoIcon, LogoWrapper } from './Logo.styled';
import logo from 'images/tweets.webp';
import React from 'react';

export const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoIcon src={logo} alt="logo" width="120"></LogoIcon>
    </LogoWrapper>
  );
};
