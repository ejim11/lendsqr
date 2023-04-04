import { NavLink, Link, useParams, Outlet } from "react-router-dom";
import backArrow from "../../assets/dashboard/back arrow.svg";
import classes from "./UserDetails.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { User } from "../../components/utils/types";
import userProfile from "../../assets/dashboard/user-personal.png";
import ReactStars from "react-stars";
import { usersListAction } from "../../slices/usersListSlice";
import {
  toastSuccess,
  toastError,
} from "../../components/utils/toastFunctions";

const UserDetails = () => {
  const params = useParams();

  const dispatchFn = useAppDispatch();

  const UserNavs = [
    {
      name: "General Details",
      nav: `customers/users/${params.userId}/general-details`,
    },
    { name: "Documents", nav: `customers/users/${params.userId}/documents` },
    {
      name: "Bank Details",
      nav: `customers/users/${params.userId}/bank-details`,
    },
    { name: "Loans", nav: `customers/users/${params.userId}/loans` },
    { name: "Savings", nav: `customers/users/${params.userId}/savings` },
    {
      name: "App and System",
      nav: `customers/users/${params.userId}/app-and-system`,
    },
  ];

  const usersList = useAppSelector((state) => state.usersList.list);

  const user = usersList.find((user: User) => user.userName === params.userId);

  const ratingChanged = (newRating: any) => {
    // console.log(newRating);
  };

  const blackListUserHandler = () => {
    dispatchFn(
      usersListAction.updateUserStatus({ status: "blacklisted", id: user.id })
    );
    toastError("User Blacklisted");
  };

  const activateUserHandler = () => {
    dispatchFn(
      usersListAction.updateUserStatus({ status: "active", id: user.id })
    );
    toastSuccess("User Activated");
  };

  return (
    <section className={classes["user-detail-container"]}>
      <Link to={"/customers/users"} className={classes["back-to-all-users"]}>
        <img src={backArrow} alt="back-arrow" />
        back to users
      </Link>
      <div className={classes["first-container"]}>
        <h2>User Details</h2>
        <div className={classes["btn-container"]}>
          <button onClick={blackListUserHandler}>blacklist user</button>
          <button onClick={activateUserHandler}>activate user</button>
        </div>
      </div>
      <div className={classes["user-detail-head"]}>
        <div className={classes["user-detail-head-inner"]}>
          <div className={classes["user-detail-head-inner-1"]}>
            <img src={userProfile} alt="user-profile" />
            <div className={classes["user-name"]}>
              <p>
                {user?.profile.firstName} {user?.profile.lastName}
              </p>
              <p>{user?.userName}</p>
            </div>
          </div>
          <div className={classes["user-detail-head-inner-1"]}>
            <div className={classes["user-star"]}>
              <p>user's tier</p>
              <ReactStars
                count={3}
                onChange={ratingChanged}
                size={24}
                //   color1={"transparent"}
                color2={"#ffd700"}
              />
            </div>
            <div className={classes["user-account"]}>
              <p>₦{user?.accountBalance}</p>
              <p>{user?.accountNumber}</p>
            </div>
          </div>
        </div>
        <div className={classes["user-navs"]}>
          {UserNavs.map((nav, i) => (
            <NavLink
              key={i}
              to={`/${nav.nav}`}
              className={(active) =>
                active.isActive
                  ? classes["active-user-nav"]
                  : classes["inactive-user-nav"]
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div>{<Outlet />}</div>
    </section>
  );
};

export default UserDetails;
