import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import statistical from './Statistics/statistical';
import user from '../components/Profile/user';
import friends from '../components/FriendList/friends';
import transactions from '../components/TransactionHistory/transactions';

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistical} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
