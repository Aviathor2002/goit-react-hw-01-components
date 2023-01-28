import { ProfileCard } from './ProfileCard';
import user from '../user.json';

export const App = () => {
  return (
    <div>
      <ProfileCard items={user} />
    </div>
  );
};
