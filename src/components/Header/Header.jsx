import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { HeaderWrp } from './Header.styled';
export const Header = () => {
  return (
    <HeaderWrp>
      <Logo />
      <Nav />
    </HeaderWrp>
  );
};
