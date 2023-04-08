import briefcase from "../../assets/dashboard/briefcase 1.svg";
import arrowDown from "../../assets/dashboard/arrow-down.svg";
import home from "../../assets/dashboard/home 1.svg";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { links } from "../utils/navLinks";
import { LinkItem } from "../utils/types";
import { RxCross2 } from "react-icons/rx";

const Navigation = ({
  displayNavMenu,
  setDisplayNavMenu,
}: {
  displayNavMenu: boolean;
  setDisplayNavMenu: Function;
}) => {
  const location = useLocation();

  return (
    <div
      className={`${classes["nav-container"]} ${
        displayNavMenu ? classes["display-nav"] : classes["hide-nav"]
      }`}
      onClick={() => {
        setDisplayNavMenu(false);
      }}
    >
      <nav className={classes["nav-container-inner"]}>
        <div className={classes.organization}>
          <img src={briefcase} alt="brief-case-img" />
          <p>Switch Organization</p>
          <img src={arrowDown} alt="arrow-down-img" />
        </div>
        <Link
          to={"/dashboard"}
          className={`${
            location.pathname === "/dashboard"
              ? classes["active-nav"]
              : classes["non-active-nav"]
          } ${classes.links}`}
        >
          <img src={home} alt="home-icon" />
          <p>Dashboard</p>
        </Link>
        {links.map((linkObj: LinkItem, i) => (
          <ul key={i}>
            <p className={classes["min-header"]} key={i}>
              {linkObj.header}
            </p>
            {linkObj.links.map(
              (link: { path: string; image: string; title: string }) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname.slice(1) === link.path
                        ? classes["active-nav"]
                        : classes["non-active-nav"]
                    } ${classes.links}`}
                  >
                    <img src={link.image} alt={link.title} />
                    <p>{link.title}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        ))}
      </nav>
      <RxCross2
        className={classes["cross-icon"]}
        onClick={() => {
          setDisplayNavMenu(false);
        }}
      />
    </div>
  );
};

export default Navigation;
