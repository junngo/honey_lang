import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserRow = (props, context) => (
  <div className="container">
    <div className="column">
      <img
        src={props.user.profile_image || require("images/no_profile.jpg")}
        alt={props.user.username}
        className={props.big ? "bigAvatar" : "avatar"}
      />
      <div className="user">
        <span className="username">{props.user.username}</span>
        <span className="name">{props.user.name}</span>
      </div>
    </div>
    <span className="column">
      <button className="button" onClick={props.handleClick}>
        {props.user.following ? context.t("Unfollow") : context.t("Follow")}
      </button>
    </span>
  </div>
);

UserRow.contextTypes = {
  t: PropTypes.func.isRequired
};

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    following: PropTypes.bool.isRequired
  }).isRequired,
  big: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

UserRow.defaultProps = {
  big: false
};

export default UserRow;
