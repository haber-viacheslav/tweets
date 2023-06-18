import { NavList, NavItem, NavLinkItem } from './Nav.styled';
export const Nav = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkItem to="/">Home</NavLinkItem>
        </NavItem>
        <NavItem>
          <NavLinkItem to="/tweets">Tweets</NavLinkItem>
        </NavItem>
      </NavList>
    </nav>
  );
};
