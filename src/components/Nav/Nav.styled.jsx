import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;
export const NavLinkItem = styled(NavLink)`
  color: #ffffff;
  font-size: 24px;
  :hover,
  :focus,
  &.active {
    color: #af85ff;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
