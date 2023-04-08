import classes from "./UserTableItem.module.scss";
import threeDots from "../../assets/dashboard/threedots.svg";
import { useState } from "react";
import eyeIcon from "../../assets/dashboard/eye-icon.svg";
import UserStatusBtns from "../UserStatusBtns/UserStatusBtns";
import { Link } from "react-router-dom";

interface UserData {
  date: string;
  email: string;
  id: string;
  orgName: string;
  phoneNumber: string;
  status: string;
  userName: string;
}

const UserTableItem = ({ user }: { user: UserData }) => {
  const [displaySideModal, setDisplaySideModal] = useState<boolean>(false);

  const displaySideModalHandler = () => {
    setDisplaySideModal(true);
  };

  const hideSideModalHandler = () => {
    setDisplaySideModal(false);
  };

  return (
    <tr className={classes["user-row"]}>
      <td className={classes["orgname"]}>{user.orgName}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber.slice().split("x")[0]}</td>
      <td>{user.date}</td>
      <td>
        <span
          className={`${
            user.status === "active"
              ? classes.active
              : user.status === "inactive"
              ? classes["inactive"]
              : classes["blacklisted"]
          } ${classes["status"]}`}
        >
          {user.status}
        </span>
      </td>
      <td className={classes.dots}>
        <img
          src={threeDots}
          alt="threeDots"
          onClick={displaySideModalHandler}
        />
      </td>
      <td
        className={`${classes["side-modal"]} ${
          displaySideModal
            ? classes["show-side-modal"]
            : classes["hide-side-modal"]
        }`}
        onClick={hideSideModalHandler}
        onMouseEnter={displaySideModalHandler}
        onMouseLeave={hideSideModalHandler}
      >
        <Link
          to={`/customers/users/${user.userName}`}
          className={`${classes["flex-paragraph"]}`}
        >
          <img src={eyeIcon} alt="eye-icon" />
          View Details
        </Link>
        <UserStatusBtns status={user.status} id={user.id} />
      </td>
    </tr>
  );
};

export default UserTableItem;
