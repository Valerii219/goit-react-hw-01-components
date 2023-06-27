import css from './FriendsListItem.module.css'
import PropTypes from 'prop-types'
export function FriendListItem({avatar, name, isOnline}){

    return(   (
        <li  className={css.item}>
        <span className={`${css.span} ${css.status} ${isOnline ? css.online : css.offline}`}>0</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
      ))
}
FriendListItem.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool
}