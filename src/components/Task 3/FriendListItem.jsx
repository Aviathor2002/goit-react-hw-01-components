import PropTypes from 'prop-types';
import {
  ForbesItem,
  Avatar,
  Name,
  IsOnline,
  IsOffline,
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ForbesItem>
      {isOnline ? (
        <IsOnline>{isOnline}</IsOnline>
      ) : (
        <IsOffline>{isOnline}</IsOffline>
      )}

      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ForbesItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
