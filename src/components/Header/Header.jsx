import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { HeaderWrp, HeaderContentWrp } from './Header.styled';
import { Container } from '../Container/Container';
export const Header = () => {
  return (
    <HeaderWrp>
      <Container>
        <HeaderContentWrp>
          <Logo />
          <Nav />
        </HeaderContentWrp>
      </Container>
    </HeaderWrp>
  );
};
