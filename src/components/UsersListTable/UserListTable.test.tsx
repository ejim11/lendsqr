import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import UsersListTable from "./UsersListTable";

describe("UserListTable Component", function () {
  test("renders a table of users and their details", function () {
    // arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UsersListTable />
        </Provider>
      </BrowserRouter>
    );
    // act

    // assert
    const tableEl = screen.getByRole("table");
    expect(tableEl).toBeInTheDocument();
  });
});
