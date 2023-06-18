import { FollowStyledBtn } from './FollowBtn.styled';
export const FollowBtn = ({ isFollow, onClick }) => {
  return (
    <FollowStyledBtn type="button" onClick={onClick} isFollow={isFollow}>
      {isFollow ? 'Following' : 'Follow'}
    </FollowStyledBtn>
  );
};
