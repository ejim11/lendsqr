import filterLogo from "../../assets/dashboard/filter-logo.svg";
import classes from "./UsersListTable.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useState } from "react";
import UserTableItem from "../UserTableItem/UserTableItem";
import FilterForm from "../FilterForm/FilterForm";
import { usersListAction } from "../../slices/usersListSlice";
import TablePagination from "../TablePagination/TablePagination";

const tableHeaders = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
  "",
];

interface UserData {
  date: string;
  email: string;
  id: string;
  orgName: string;
  phoneNumber: string;
  status: string;
  userName: string;
}

const storedCurrentPage: any = localStorage.getItem("currentPage");

const UsersListTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(
    JSON.parse(storedCurrentPage) || 1
  );

  const dispatchFn = useAppDispatch();

  const displayFilterFormHandler = (e: any) => {
    console.log(e.target.dataset);
    dispatchFn(usersListAction.setDisplayFilterForm(true));
  };

  const amountOfUsersPerPage = 10;

  let startIndex = (currentPage - 1) * amountOfUsersPerPage;

  let endIndex = currentPage * amountOfUsersPerPage;

  const usersTableList = useAppSelector((state) => state.usersList.tableList);

  return (
    <div>
      <div className={classes["table-container"]}>
        <table className={classes.table}>
          <thead>
            <tr>
              {tableHeaders.map((header: string, i: number) => (
                <th key={i} className={classes.headers}>
                  {header}
                  {header && (
                    <img
                      src={filterLogo}
                      alt="filter-logo"
                      onClick={displayFilterFormHandler}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usersTableList
              .slice(startIndex, endIndex)
              .map((user: UserData, i: number) => (
                <UserTableItem user={user} key={i} />
              ))}
          </tbody>
        </table>
        <FilterForm />
      </div>
      <TablePagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UsersListTable;
