import filterLogo from "../../assets/dashboard/filter-logo.svg";
import classes from "./UsersListTable.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useState } from "react";
import UserTableItem from "../UserTableItem/UserTableItem";
import chevronLeft from "../../assets/dashboard/left-chevron.svg";
import chevronRight from "../../assets/dashboard/right-chevron.svg";
import FilterForm from "../FilterForm/FilterForm";
import { usersListAction } from "../../slices/usersListSlice";

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

  const pageNavigators = Array.from(
    { length: amountOfUsersPerPage },
    (_, i) => i + 1
  );

  let startIndex = (currentPage - 1) * amountOfUsersPerPage;

  let endIndex = currentPage * amountOfUsersPerPage;

  const decreaseCurrentPage = () => {
    setCurrentPage((prevState: number) => {
      if (prevState === 1) {
        return prevState;
      } else {
        localStorage.setItem("currentPage", JSON.stringify(prevState - 1));
        return prevState - 1;
      }
    });
  };

  const increaseCurrentPage = () => {
    setCurrentPage((prevState: number) => {
      if (prevState === 10) {
        return prevState;
      } else {
        localStorage.setItem("currentPage", JSON.stringify(prevState + 1));
        return prevState + 1;
      }
    });
  };

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
      <div className={classes["paginate"]}>
        <div className={classes["paginate-page"]}>
          <p>Showing</p>
          <p className={classes["page-number"]}>{currentPage}</p>
          <p>out of {amountOfUsersPerPage}</p>
        </div>
        <div className={classes["page-navigation"]}>
          <div onClick={decreaseCurrentPage} className={classes.prev}>
            <img src={chevronLeft} alt="chevron left" />
          </div>

          {currentPage + 2 < amountOfUsersPerPage - 2 ? null : <p>...</p>}
          {pageNavigators
            .slice(
              currentPage - 1,
              currentPage + 2 >= amountOfUsersPerPage - 2
                ? amountOfUsersPerPage - 2
                : currentPage + 2
            )
            .map((navigator: number, i: number) => (
              <p
                key={i}
                className={`${classes.navigator} ${
                  currentPage === navigator
                    ? classes["active-navigator"]
                    : classes["inactive-navigator"]
                }`}
                onClick={() => {
                  setCurrentPage(navigator);
                }}
              >
                {navigator}
              </p>
            ))}
          {currentPage + 2 >= amountOfUsersPerPage - 2 ? null : <p>...</p>}
          {pageNavigators
            .slice(amountOfUsersPerPage - 2, amountOfUsersPerPage)
            .map((navigator: number, i: number) => (
              <p
                key={i}
                className={`${classes.navigator} ${
                  currentPage === navigator
                    ? classes["active-navigator"]
                    : classes["inactive-navigator"]
                }`}
                onClick={() => {
                  setCurrentPage(navigator);
                }}
              >
                {navigator}
              </p>
            ))}

          <div onClick={increaseCurrentPage} className={classes.next}>
            <img src={chevronRight} alt="chevron right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersListTable;
