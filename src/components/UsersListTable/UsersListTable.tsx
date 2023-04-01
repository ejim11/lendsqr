import filterLogo from "../../assets/dashboard/filter-logo.svg";
import threeDots from "../../assets/dashboard/threedots.svg";
import classes from "./UsersListTable.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useState } from "react";

const tableHeaders = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
  "",
];

const UsersListTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const usersList = useAppSelector((state) => state.usersList.list);

  console.log(usersList);

  return (
    <div className={classes["table-container"]}>
      <table className={classes.table}>
        <thead>
          <tr>
            {tableHeaders.map((header: string, i: number) => (
              <th key={i}>
                {header}
                {header && <img src={filterLogo} alt="filter-logo" />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersList.slice(0, 10).map((user: any, i: number) => (
            <tr key={i}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{`${new Date(user.createdAt)}`}</td>
              <td>active</td>
              <td>
                <img src={threeDots} alt="threeDots" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersListTable;
