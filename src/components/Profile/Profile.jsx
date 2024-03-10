import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileWrapper}>
      <div className={css.infoWrapper}>
        <img className={css.infoImg} src={image} alt="User avatar" />
        <p className={css.infoName}>{name}</p>
        <p className={css.infoTag}>@{tag}</p>
        <p className={css.infoLocation}>{location}</p>
      </div>

      <ul className={css.statsWrapper}>
        <li>
          <span>Followers</span>
          <span className={css.statsCounter}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.statsCounter}>{stats.views}</span>
          <span className={css.statsLine}></span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.statsCounter}>{stats.likes}</span>
          <span className={css.statsLine}></span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
