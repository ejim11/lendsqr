import { screen, render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("App component", function () {
  test("renders login page when app starts", function () {
    // arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    // act

    // assert
    const loginEl = screen.getByText("Enter details to login");
    expect(loginEl).toBeInTheDocument();
  });
});
