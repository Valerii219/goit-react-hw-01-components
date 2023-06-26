import { FriendListItem } from '../friendListItem/FriendListItem'
import css from './FriendList.module.css'
export function FriendList({ friends}) {
    return (
      <ul className={css.friendList}>
        {friends.map((friend) => (
        <FriendListItem 
        key={friend.id} 
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
      ))}
      </ul>
    );
  }

