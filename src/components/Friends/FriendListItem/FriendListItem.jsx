import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={css.itemWrapper}>
      <img className={css.itemImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.itemName}>{name}</p>
      <p
        className={clsx({
          [css.online]: friend.isOnline,
          [css.offline]: !friend.isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
