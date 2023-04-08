/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Users from "../../pages/Users/Users";
import { act } from "react-dom/test-utils";

describe("Navigation Component", function () {
  const setupMyTest = () => {
    const router = createMemoryRouter(
      [
        {
          path: "/customers/dashboard",
          element: (
            <Navigation displayNavMenu={false} setDisplayNavMenu={() => {}} />
          ),
        },
        {
          path: "/customers/users",
          element: <Users />,
        },
      ],
      {
        // Set for where you want to start in the routes. Remember, KISS (Keep it simple, stupid) the routes.
        initialEntries: ["/customers/dashboard", "/customers/users"],
        // We don't need to explicitly set this, but it's nice to have.
        initialIndex: 0,
      }
    );

    render(<RouterProvider router={router} />);

    // Objectify the router so we can explicitly pull when calling setupMyTest
    return { router };
  };

  test("renders a list of navigation links", function () {
    // arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navigation displayNavMenu={false} setDisplayNavMenu={() => {}} />
        </Provider>
      </BrowserRouter>
    );

    // act

    // assert
    const linksList = screen.getAllByRole("listitem");
    expect(linksList).not.toBeNull();
  });

  test("renders the table of users with details when the users link is clicked", async function () {
    const { router } = setupMyTest();

    expect(router.state.location.pathname).toEqual("/customers/dashboard");

    await act(async () => {
      const userLinkEl = screen.getByText("users", { exact: false });
      userEvent.click(userLinkEl);
    });

    // const usersDetailTableEl = screen.getByRole("table");

    // expect(router.state.location.pathname).toEqual("/customers/users");
  });
});
