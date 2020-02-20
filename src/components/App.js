import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import statisticalData from '../components/Statistics/statistical-data';
import user from '../components/Profile/user'

export default function App() {
    return (
        <>
            <Profile user={user}/>

            <Statistics
                title="Upload stats"
                stats={statisticalData}
            />
        </>
    )
};
