import { Profile } from './Profile/Profile';
import user from './sourse/user';
import { Statistics } from './Statistics/Statistics';
import data from './sourse/data';
import { FriendList } from './FriendList/FriendList';
import friends from './sourse/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './sourse/transactions';

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
         <Statistics title="Upload stats" stats={data} />
         <FriendList friends={friends} />
         <TransactionHistory items={transactions} />
      </div>
   );
};
