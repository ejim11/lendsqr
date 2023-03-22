import classes from "./Login.module.scss";
import logo from "../../assets/logo.svg";
import loginPageImg from "../../assets/login-page-img.svg";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <section className={classes["login"]}>
      <div className={classes["first-side"]}>
        <img src={logo} alt={"logo-img"} className={classes.logo} />
        <img
          src={loginPageImg}
          alt={"logo-img"}
          className={classes["login-img"]}
        />
      </div>
      <div className={classes["second-side"]}>
        <img src={logo} alt={"logo-img"} className={classes.logo} />
        <div className={classes.container}>
          <h3>Welcome!</h3>
          <p className={classes.text}>Enter details to login</p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
