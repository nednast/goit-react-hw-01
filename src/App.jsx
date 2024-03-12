import userData from "./components/Profile/userData.json";
import friends from "./components/Friends/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/Friends/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
