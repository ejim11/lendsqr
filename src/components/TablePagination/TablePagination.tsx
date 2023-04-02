import classes from "./TablePagination.module.scss";
import chevronLeft from "../../assets/dashboard/left-chevron.svg";
import chevronRight from "../../assets/dashboard/right-chevron.svg";

const TablePagination = ({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: Function;
  currentPage: number;
}) => {
  const amountOfUsersPerPage = 10;

  const pageNavigators = Array.from(
    { length: amountOfUsersPerPage },
    (_, i) => i + 1
  );

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

  return (
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
  );
};

export default TablePagination;