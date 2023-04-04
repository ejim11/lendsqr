import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput/SearchInput";
import classes from "./Layout.module.scss";
import notificationIcon from "../../assets/dashboard/notification-icon.svg";
import profileImg from "../../assets/dashboard/profile-img.jpg";
import chevronIcon from "../../assets/dashboard/chevron-icon.svg";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const [displayNavMenu, setDisplayNavMenu] = useState<boolean>(false);

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
          <HiOutlineMenuAlt3
            className={`${classes["menu-icon"]} ${
              displayNavMenu
                ? classes["hide-menu-icon"]
                : classes["show-menu-icon"]
            }`}
            onClick={() => {
              setDisplayNavMenu(true);
            }}
          />
        </header>
      )}
      <main>
        {location.pathname !== "/login" && (
          <Navigation
            displayNavMenu={displayNavMenu}
            setDisplayNavMenu={setDisplayNavMenu}
          />
        )}
        <>{children}</>
      </main>
    </>
  );
};

export default Layout;
