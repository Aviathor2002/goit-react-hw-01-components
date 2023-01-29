import { ProfileCard } from './Task 1/ProfileCard';
import user from '../user.json';

export const App = () => {
  return (
    <div>
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
