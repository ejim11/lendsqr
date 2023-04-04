import constructionImage from "../../assets/dashboard/undraw_under_construction.svg";
import classes from "./UnderConstruction.module.scss";

const UnderConstruction = () => {
  return (
    <div className={classes["container"]}>
      <h2>Under Contruction</h2>
      <img src={constructionImage} alt="underconstruction" />
    </div>
  );
};

export default UnderConstruction;
