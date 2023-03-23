import users from "../../assets/dashboard/user-friends 1.svg";
import guarantors from "../../assets/dashboard/guarantors-icon.svg";
import loans from "../../assets/dashboard/loans.svg";
import decisionModel from "../../assets/dashboard/decisions.svg";
import savings from "../../assets/dashboard/savings.svg";
import loanRequest from "../../assets/dashboard/loan-request.svg";
import whitelist from "../../assets/dashboard/whitelist.svg";
import karma from "../../assets/dashboard/karma.svg";
import briefcase from "../../assets/dashboard/briefcase 1.svg";
import savingsProduct from "../../assets/dashboard/savings product.svg";
import fees from "../../assets/dashboard/fees.svg";
import transactions from "../../assets/dashboard/transaction.svg";
import services from "../../assets/dashboard/services.svg";
import serviceAccount from "../../assets/dashboard/service account.svg";
import settlements from "../../assets/dashboard/settlements.svg";
import report from "../../assets/dashboard/reports.svg";
import preferences from "../../assets/dashboard/preferences.svg";
import feesAndPricing from "../../assets/dashboard/feesAndPricing.svg";
import audit from "../../assets/dashboard/audit.svg";

export const links = [
  {
    header: "customers",
    links: [
      {
        path: "customers/users",
        image: users,
        title: "users",
      },
      {
        path: "customers/guarantors",
        image: guarantors,
        title: "guarantors",
      },
      {
        path: "customers/loans",
        image: loans,
        title: "loans",
      },
      {
        path: "customers/decision-models",
        image: decisionModel,
        title: "decision models",
      },
      {
        path: "customers/savings",
        image: savings,
        title: "savings",
      },
      {
        path: "customers/loan-requests",
        image: loanRequest,
        title: "loan requests",
      },
      {
        path: "customers/whitelist",
        image: whitelist,
        title: "whitelist",
      },
      {
        path: "customers/karma",
        image: karma,
        title: "karma",
      },
    ],
  },
  {
    header: "business",
    links: [
      {
        path: "business/organization",
        image: briefcase,
        title: "organization",
      },
      {
        path: "business/loan-products",
        image: loans,
        title: "loan products",
      },
      {
        path: "business/savings-product",
        image: savingsProduct,
        title: "savings product",
      },
      {
        path: "business/fees-and-charges",
        image: fees,
        title: "fees and charges",
      },
      {
        path: "business/transactions",
        image: transactions,
        title: "transactions",
      },
      {
        path: "business/services",
        image: services,
        title: "services",
      },
      {
        path: "business/service-account",
        image: serviceAccount,
        title: "service account",
      },
      {
        path: "business/settlements",
        image: settlements,
        title: "settlements",
      },
      {
        path: "business/reports",
        image: report,
        title: "reports",
      },
    ],
  },
  {
    header: "settings",
    links: [
      {
        path: "settings/preferences",
        image: preferences,
        title: "preferences",
      },
      {
        path: "settings/fees-and-pricing",
        image: feesAndPricing,
        title: "fees and pricing",
      },
      {
        path: "settings/audit-logs",
        image: audit,
        title: "audit logs",
      },
    ],
  },
];
