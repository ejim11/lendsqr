import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { User } from "../../../components/utils/types";
import classes from "./GeneralDetails.module.scss";
import generateUserGeneralDetails from "../../../components/utils/generateUserGeneralDetails";

const GeneralDetails = () => {
  const params = useParams();

  const usersList = useAppSelector((state) => state.usersList.list);

  const user = usersList.find((user: User) => user.userName === params.userId);

  const userDetailsData = generateUserGeneralDetails(user);

  return (
    <div className={classes["container"]}>
      {userDetailsData.map((userDetail, i) => (
        <div key={i} className={classes["container-inner"]}>
          <h4>{userDetail.main}</h4>
          <div className={classes["details-container"]}>
            {userDetail.details.map((detail, i) => (
              <div key={i} className={classes["detail"]}>
                <p>{detail.title}</p>
                <p>{detail.detail}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralDetails;
