import filterLogo from "../../assets/dashboard/filter-logo.svg";
import classes from "./UsersListTable.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useState } from "react";
import UserTableItem from "../UserTableItem/UserTableItem";
import FilterForm from "../FilterForm/FilterForm";
import { usersListAction } from "../../slices/usersListSlice";
import { UserData } from "../utils/types";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { TiCancel } from "react-icons/ti";
import backArrow from "../../assets/dashboard/back arrow.svg";
import ReactPaginate from "react-paginate";

const tableHeaders = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
  "",
];

// const storedCurrentPage: any = localStorage.getItem("currentPage");

const UsersListTable = () => {
  let usersTableList = useAppSelector((state) => state.usersList.tableList);

  const dispatchFn = useAppDispatch();

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = usersTableList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(usersTableList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usersTableList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const location = useLocation();

  useEffect(() => {
    const storedTableList: any = localStorage.getItem("tableList");

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
      dispatchFn(usersListAction.upDateTableList(JSON.parse(storedTableList)));
    }
  }, [location, dispatchFn]);

  const displayFilterFormHandler = (e: any) => {
    console.log(e.target.dataset);
    dispatchFn(usersListAction.setDisplayFilterForm(true));
  };

  return (
    <div className={classes["container"]}>
      {location.pathname !== "/customers/users" && (
        <Link to={"/customers/users"} className={classes["back-to-all-users"]}>
          <img src={backArrow} alt="back-arrow" />
          back to all users
        </Link>
      )}
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
            {currentItems &&
              currentItems.map((user: UserData, i: number) => (
                <UserTableItem user={user} key={i} />
              ))}
          </tbody>
        </table>
        {usersTableList && usersTableList.length === 0 && (
          <p className={classes["no-user"]}>
            <TiCancel className={classes["cancel-icon"]} /> No users found
          </p>
        )}
        <FilterForm />
      </div>
      <div className={classes["paginate"]}>
        <div className={classes["paginate-showing"]}>
          <p>showing</p>
          <p className={classes["paginate-showing-number"]}>{endOffset}</p>
          <p>out of {usersTableList.length}</p>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={classes["paginate-container"]}
          previousClassName={classes["paginate-container-previous"]}
          nextClassName={classes["paginate-container-next"]}
          previousLinkClassName={classes["paginate-container-nav-link"]}
          nextLinkClassName={classes["paginate-container-nav-link"]}
          pageLinkClassName={classes["paginate-container-page-number-link"]}
          activeLinkClassName={classes["paginate-container-active-number-link"]}
        />
      </div>
    </div>
  );
};

export default UsersListTable;
