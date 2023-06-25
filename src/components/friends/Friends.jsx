import { FriendListItem } from './FriendListItem'
export function FriendList({ friends}) {
    return (
      <ul className="friendList">
        {friends.map((friend) => (
        <FriendListItem   />
      ))}
      </ul>
    );
  }

