import PropTypes from 'prop-types';



export const FriendList = ({friends}) => {
   return (
   <ul className="stat-list">
{friends.map(friend => (
   <li className="item" key={friend.id} style={friend.isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
      <span className="status"></span>
      <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className="name">{friend.name}</p>
   </li>
   ))}
</ul>
   );};


   FriendList.propTypes = {
      friends: PropTypes.arrayOf(
         PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
      })),
   };