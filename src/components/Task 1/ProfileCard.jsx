import PropTypes from 'prop-types';
import {
  Conteiner,
  UserInfo,
  Avatar,
  Name,
  InfoText,
  Stats,
  StatItem,
  StatName,
  StatNum,
} from './ProfileCard.styled';

export const ProfileCard = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Conteiner>
      <UserInfo>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <InfoText>@{tag}</InfoText>
        <InfoText>{location}</InfoText>
      </UserInfo>

      <Stats>
        <StatItem>
          <StatName>Followers</StatName>
          <StatNum>{followers}</StatNum>
        </StatItem>
        <StatItem>
          <StatName>Views</StatName>
          <StatNum>{views}</StatNum>
        </StatItem>
        <StatItem>
          <StatName>Likes</StatName>
          <StatNum>{likes}</StatNum>
        </StatItem>
      </Stats>
    </Conteiner>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
