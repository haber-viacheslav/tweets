import PropTypes from 'prop-types';
import { StyledDescription } from './Description.styled';
export const Description = ({ children }) => {
  return <StyledDescription>{children}</StyledDescription>;
};

Description.propTypes = {
  children: PropTypes.any,
};
