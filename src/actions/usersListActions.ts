import { usersListAction } from "../slices/usersListSlice";

export const getAllUsers = () => {
  return async (dispatch: Function) => {
    try {
      const res = await fetch(
        " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
      );
      const data = await res.json();

      dispatch(usersListAction.setUsersList(data));
      dispatch(usersListAction.setTableList(data));
    } catch (err) {
      console.log(err);
    }
  };
};
