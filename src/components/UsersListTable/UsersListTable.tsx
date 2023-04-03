import filterLogo from "../../assets/dashboard/filter-logo.svg";
import classes from "./UsersListTable.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useState } from "react";
import UserTableItem from "../UserTableItem/UserTableItem";
import FilterForm from "../FilterForm/FilterForm";
import { usersListAction } from "../../slices/usersListSlice";
import TablePagination from "../TablePagination/TablePagination";
import { UserData } from "../utils/types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TiCancel } from "react-icons/ti";

const tableHeaders = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
  "",
];

const storedCurrentPage: any = localStorage.getItem("currentPage");

const UsersListTable = () => {
  const usersTableList = useAppSelector((state) => state.usersList.tableList);

  const dispatchFn = useAppDispatch();

  const location = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(
    JSON.parse(storedCurrentPage) || 1
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const org = queryParams.get("org");
    const username = queryParams.get("username");
    const email = queryParams.get("email");
    const phone = queryParams.get("phone");
    const date = queryParams.get("date");
    const status = queryParams.get("status");

    if (org) {
      dispatchFn(usersListAction.filterTableListDataByOrganization(org));
    }
    if (username) {
      dispatchFn(usersListAction.filterTableListDataByUsername(username));
    }
    if (email) {
      dispatchFn(usersListAction.filterTableListDataByEmail(email));
    }
    if (phone) {
      dispatchFn(usersListAction.filterTableListDataByPhone(phone));
    }
    if (date) {
      dispatchFn(usersListAction.filterTableListDataByDate(date));
    }
    if (status) {
      dispatchFn(usersListAction.filterTableListDataByStatus(status));
    }
    if (!org && !username && !email && !phone && !date && !status) {
      dispatchFn(usersListAction.restoreTableList());
    }
  }, [location, dispatchFn]);

  const amountOfPages = Math.ceil(usersTableList.length / 10);

  const amountOfUsersPerPage = 10;

  let startIndex = (currentPage - 1) * amountOfUsersPerPage;

  let endIndex = currentPage * amountOfUsersPerPage;

  const displayFilterFormHandler = (e: any) => {
    console.log(e.target.dataset);
    dispatchFn(usersListAction.setDisplayFilterForm(true));
  };

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
        {usersTableList.length === 0 && (
          <p className={classes["no-user"]}>
            <TiCancel className={classes["cancel-icon"]} /> No users found
          </p>
        )}
        <FilterForm setCurrentPage={setCurrentPage} />
      </div>
      <TablePagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        amountOfPages={amountOfPages}
      />
    </div>
  );
};

export default UsersListTable;
