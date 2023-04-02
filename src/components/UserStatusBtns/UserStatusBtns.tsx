import blacklistIcon from "../../assets/dashboard/blacklist-icon.svg";
import activateIcon from "../../assets/dashboard/activate-icon.svg";
import classes from "./UserStatusBtns.module.scss";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { usersListAction } from "../../slices/usersListSlice";

const UserStatusBtns = ({ status, id }: { status: string; id: string }) => {
  const dispatchFn = useAppDispatch();

  const blacklistUser = () => {
    dispatchFn(usersListAction.updateUserStatus({ status: "blacklisted", id }));
  };

  const activateUser = () => {
    dispatchFn(usersListAction.updateUserStatus({ status: "active", id }));
  };

  const inactivateUser = () => {
    dispatchFn(usersListAction.updateUserStatus({ status: "inactive", id }));
  };

  const btns =
    status === "inactive" ? (
      <>
        <p className={`${classes["flex-paragraph"]}`} onClick={blacklistUser}>
          <img src={blacklistIcon} alt="blacklist" />
          Blacklist user
        </p>
        <p className={`${classes["flex-paragraph"]}`} onClick={activateUser}>
          <img src={activateIcon} alt="activate" />
          activate user
        </p>
      </>
    ) : status === "active" ? (
      <>
        <p className={`${classes["flex-paragraph"]}`} onClick={blacklistUser}>
          <img src={blacklistIcon} alt="blacklist" />
          Blacklist user
        </p>
        <p className={`${classes["flex-paragraph"]}`} onClick={inactivateUser}>
          <img src={blacklistIcon} alt="inactive" />
          inactivate user
        </p>
      </>
    ) : (
      <>
        <p className={`${classes["flex-paragraph"]}`} onClick={inactivateUser}>
          <img src={blacklistIcon} alt="inactive" />
          inactivate user
        </p>
        <p className={`${classes["flex-paragraph"]}`} onClick={activateUser}>
          <img src={activateIcon} alt="activate" />
          activate user
        </p>
      </>
    );

  return <>{btns}</>;
};

export default UserStatusBtns;
