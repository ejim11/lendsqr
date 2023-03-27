import classes from "./Users.module.scss";
import { usersStatistics } from "../../../components/utils/usersStatistics";
import { useAppSelector } from "../../../hooks/reduxHooks";

const Users = () => {
  const usersList = useAppSelector((state) => state.usersList.list);

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
    </section>
  );
};

export default Users;
