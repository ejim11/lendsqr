import { User } from "./types";

const generateUserGeneralDetails = (user: User) => {
  return [
    {
      main: "personal information",
      details: [
        {
          title: "full name",
          detail: `${user.profile.firstName} ${user.profile.lastName}`,
        },
        {
          title: "phone number",
          detail: user.phoneNumber.slice().split("x")[0],
        },
        {
          title: "email address",
          detail: user.email,
        },
        {
          title: "bvn",
          detail: user.profile.bvn,
        },
        {
          title: "gender",
          detail: user.profile.gender,
        },
        {
          title: "marital status",
          detail: "single",
        },
        {
          title: "children",
          detail: "none",
        },
        {
          title: "type of residence",
          detail: "parent's apartment",
        },
      ],
    },
    {
      main: "education and employment",
      details: [
        {
          title: "level of education",
          detail: user.education.level,
        },
        {
          title: "employment status",
          detail: user.education.employmentStatus,
        },
        {
          title: "sector of employment",
          detail: user.education.sector,
        },
        {
          title: "duration of employment",
          detail: user.education.duration,
        },
        {
          title: "office email",
          detail: user.education.officeEmail,
        },
        {
          title: "monthly income",
          detail: `₦${user.education.monthlyIncome}`,
        },
        {
          title: "loan repayment",
          detail: user.education.loanRepayment,
        },
      ],
    },
    {
      main: "socials",
      details: [
        {
          title: "twitter",
          detail: user.socials.twitter,
        },
        {
          title: "facebook",
          detail: user.socials.facebook,
        },
        {
          title: "instagram",
          detail: user.socials.instagram,
        },
      ],
    },
    {
      main: "guarantor",
      details: [
        {
          title: "full name",
          detail: `${user.guarantor.firstName} ${user.guarantor.lastName}`,
        },
        {
          title: "phone number",
          detail: user.guarantor.phoneNumber.slice().split("x")[0],
        },
        {
          title: "email address",
          detail: user.guarantor.address,
        },
        {
          title: "relationship",
          detail: user.guarantor.gender,
        },
      ],
    },
  ];
};

export default generateUserGeneralDetails;
