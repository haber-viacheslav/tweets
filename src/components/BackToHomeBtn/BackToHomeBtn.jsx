import { StyledBackToHomeBtn } from './BackToHomeBtn.styled';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const BackToHomeBtn = ({ children }) => {
  return (
    <StyledBackToHomeBtn to="/">
      <BsFillArrowLeftCircleFill size="24" />
      {children}
    </StyledBackToHomeBtn>
  );
};
