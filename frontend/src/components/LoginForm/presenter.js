import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

export const LoginForm = (props, context) => (
  <div className="form-component">
    <form className="form"  onSubmit={props.handleSubmit}>
        <input
            type="text"
            placeholder={context.t("Username")}
            className="text-input"
            onChange={props.handleInputChange}
            name="username"
            value={props.usernameValue}
        />
        <input
            type="password"
            placeholder={context.t("Password")}
            className="text-input"
            onChange={props.handleInputChange}
            name="password"
            value={props.passwordValue}
        />
        <input 
            type="submit" 
            value={context.t("Log in")} 
            className="button" 
        />
    </form>
    <span className="divider">or</span>
    <span className="facebook-link">
        <Ionicon 
            icon="logo-facebook"
            fontSize="20px"
            color="#385185" 
        /> 
        {context.t("Log in with Facebook")}
    </span>
    <span className="forgot-link">{context.t("Forgot password?")}</span>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

LoginForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;