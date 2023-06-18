import { StyledLoadMoreBtn } from './LoadMoreBtn.styled';
export const LoadMoreBtn = ({ onClick }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={onClick}>
      Load More
    </StyledLoadMoreBtn>
  );
};
