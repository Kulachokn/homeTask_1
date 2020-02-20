import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import statisticalData from "../components/Statistics/statistical-data";
import user from "../components/Profile/user";
import friends from "../components/FriendList/friends";
import transactions from "../components/TransactionHistory/transactions";

export default function App() {
    return (
        <>
            <Profile user={user}/>
            <Statistics
                title="Upload stats"
                stats={statisticalData}
            />
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions}/>
        </>
    )
};
