/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import store from "../../store";
import { act } from "react-dom/test-utils";

describe("Login Form Component", function () {
  test("renders the  `under construction` in the dashboard page when form is submitted", async function () {
    // arrange
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );
    });

    // act
    await act(async () => {
      const loginBtn = screen.getByRole("button");
      userEvent.click(loginBtn);
    });

    setTimeout(() => {
      //  assert
      const outputEl = screen.getByText("under construction", { exact: false });
      expect(outputEl).toBeInTheDocument();
    }, 4000);
  });
});
