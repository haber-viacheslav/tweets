import PropTypes from 'prop-types';
import { SectionWrp, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrp>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionWrp>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
