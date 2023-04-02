import classes from "./Users.module.scss";
import { usersStatistics } from "../../components/utils/usersStatistics";
import UsersListTable from "../../components/UsersListTable/UsersListTable";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { usersListAction } from "../../slices/usersListSlice";

const Users = () => {
  const dispatchFn = useAppDispatch();

  const closeFilterFormHandler = (e: any) => {
    if (e.target.dataset.filterform === "false") {
      dispatchFn(usersListAction.setDisplayFilterForm(false));
    }
  };

  return (
    <section
      className={classes["users"]}
      onClick={closeFilterFormHandler}
      data-filterform="false"
    >
      <h2>Users</h2>
      <div className={classes["statistics-board"]}>
        {usersStatistics.map((item, i) => (
          <div key={i} className={classes["statistics-item"]}>
            <img src={item.image} alt={item.title} />
            <p className={classes["statistics-item-title"]}>{item.title}</p>
            <p className={classes["statistics-item-number"]}>{item.number}</p>
          </div>
        ))}
      </div>
      <UsersListTable />
    </section>
  );
};

export default Users;
