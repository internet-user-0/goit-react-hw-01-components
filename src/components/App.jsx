import { Profile } from "./Profile";
import user from './sourse/user';
import {Statistics} from "./Statistics";
import data from "./sourse/data"
import { FriendList } from "./FriendList";
import friends from "./sourse/friends"
import { TransactionHistory } from "./TransactionHistory";
import transactions from "./sourse/transactions"

export const App = () => {
  return (
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics
      title="Upload stats"
      stats={data}
      />
      <FriendList
      friends={friends} />
      <TransactionHistory
      items={transactions}
      />
    </div>
  );
};


// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}