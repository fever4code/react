import React, { Component } from "react";
import Profile from "./Profile/Profile";
import Statistics from "../src/Statistic/Statistic";
import FriendList from "../src/FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "./assets/user.json";
import statisticalData from "./assets/statistical-data.json";
import friends from "./assets/friends.json";
import transactions from "./assets/transactions.json";

class App extends Component {
  render() {
    return (
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    );
  }
}

export default App;
