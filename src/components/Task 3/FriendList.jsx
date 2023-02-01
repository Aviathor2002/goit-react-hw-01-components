import { FriendListItem } from 'components/Task 3/FriendListItem';
import PropTypes from 'prop-types';
import { LeaderBoardProfiles } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <LeaderBoardProfiles>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </LeaderBoardProfiles>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
