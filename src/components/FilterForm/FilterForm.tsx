import classes from "./FilterForm.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useState } from "react";
import { usersListAction } from "../../slices/usersListSlice";
import { useNavigate } from "react-router-dom";

const FilterForm = () => {
  const tableListData = useAppSelector((state) => state.usersList.tableList);

  const dispatchFn = useAppDispatch();

  const displayFilterForm = useAppSelector(
    (state) => state.usersList.displayFilterForm
  );

  const navigate = useNavigate();

  const [orgValue, setOrgValue] = useState("");
  const [usernameVal, setUsernameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [dateVal, setDateVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [statusVal, setStatusVal] = useState("");

  const organizationsList: string[] =
    tableListData && tableListData.map((user: any) => user.orgName);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    if (
      orgValue ||
      usernameVal ||
      emailVal ||
      dateVal ||
      phoneVal ||
      statusVal
    ) {
      navigate(
        `/customers/users/?${orgValue ? `org=${orgValue}` : ""}${
          usernameVal ? `&username=${usernameVal}` : ""
        }${emailVal ? `&email=${emailVal}` : ""}${
          dateVal ? `&date=${dateVal}` : ""
        }${phoneVal ? `&phone=${phoneVal}` : ""}${
          statusVal ? `&status=${statusVal}` : ""
        }`
      );
      dispatchFn(usersListAction.setDisplayFilterForm(false));
      setOrgValue("");
      setStatusVal("");
    } else {
      return;
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`${classes.form} ${
        displayFilterForm ? classes["display-form"] : classes["hide-form"]
      }`}
      onMouseEnter={() => {
        dispatchFn(usersListAction.setDisplayFilterForm(true));
      }}
      onMouseLeave={() => {
        dispatchFn(usersListAction.setDisplayFilterForm(false));
      }}
    >
      <div className={classes["input-container"]}>
        <label htmlFor="organization">organization</label>
        <div className={classes["select-body"]}>
          <select
            name="organizations"
            id="organizations"
            onChange={(e) => {
              setOrgValue(e.target.value);
            }}
          >
            <option value="select">Select</option>
            {organizationsList &&
              organizationsList.map((organization, i) => (
                <option value={organization} key={i}>
                  {organization}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={usernameVal}
          onChange={(e) => {
            setUsernameVal(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={emailVal}
          onChange={(e) => {
            setEmailVal(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="date">date</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          value={dateVal}
          onChange={(e) => {
            setDateVal(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={phoneVal}
          onChange={(e) => {
            setPhoneVal(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="status">status</label>
        <div className={classes["select-body"]}>
          <select
            name="status"
            id="status"
            onChange={(e) => {
              setStatusVal(e.target.value);
            }}
          >
            <option value="Select">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">inActive</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>
      </div>
      <div className={classes["btn-container"]}>
        <button type="reset">Reset</button>
        <button type="submit">Filter</button>
      </div>
    </form>
  );
};

export default FilterForm;
