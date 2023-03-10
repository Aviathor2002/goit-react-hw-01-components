import { ProfileCard } from './Task 1/ProfileCard';
import { Statistics } from './Task 2/Statistics';
import { FriendList } from './Task 3/FriendList';
import { TransactionHistory } from './Task 4/TransactionHistory';

import { Title } from './App.styled';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <ul>
      <li>
        <Title>Task 1</Title>
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </li>
      <li>
        <Title>Task 2</Title>
        <Statistics title="Upload stats" data={data} />
      </li>
      <li>
        <Title>Task 3</Title>
        <FriendList friends={friends} />
      </li>
      <li>
        <Title>Task 4</Title>
        <TransactionHistory items={transactions} />
      </li>
    </ul>
  );
};
