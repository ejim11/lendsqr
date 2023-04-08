/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Login from "./Login";
import '@testing-library/jest-dom'

describe("Login Component", function () {
    test("renders the login form", function(){
      // arrange
      render(<BrowserRouter>
      <Provider store = {store}>
        <Login />
      </Provider>
      </BrowserRouter>)

      // act

      // assert
      const loginForm = screen.getByTestId("form");
      expect(loginForm).toBeInTheDocument();
    })
});
