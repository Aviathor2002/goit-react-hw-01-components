import { ProfileCard } from './Task 1/ProfileCard';
import { Title } from './App.styled';
import user from '../user.json';

export const App = () => {
  return (
    <div>
      <Title>Task 1</Title>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
