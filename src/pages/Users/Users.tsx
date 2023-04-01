import classes from "./Users.module.scss";
import { usersStatistics } from "../../components/utils/usersStatistics";
import UsersListTable from "../../components/UsersListTable/UsersListTable";

const Users = () => {
  return (
    <section className={classes["users"]}>
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
