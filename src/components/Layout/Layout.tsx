import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput/SearchInput";
import classes from "./Layout.module.scss";
import notificationIcon from "../../assets/dashboard/notification-icon.svg";
import profileImg from "../../assets/dashboard/profile-img.jpg";
import chevronIcon from "../../assets/dashboard/chevron-icon.svg";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && (
        <header className={classes.header}>
          <img src={logo} alt={"logo"} className={classes.logo} />
          <SearchInput />
          <div className={classes["header-side"]}>
            <Link to={"/docs"} className={classes.docs}>
              Docs
            </Link>
            <div className={classes.notify}>
              <img src={notificationIcon} alt="notification-icon" />
              <span></span>
            </div>
            <div className={classes.profile}>
              <img
                src={profileImg}
                alt="profile-img"
                className={classes["profile-img"]}
              />
              <p>Adodeji</p>
              <img src={chevronIcon} alt="chevronIcon" />
            </div>
          </div>
        </header>
      )}
      <main>
        {location.pathname !== "/login" && <Navigation />}
        <>{children}</>
      </main>
    </>
  );
};

export default Layout;
