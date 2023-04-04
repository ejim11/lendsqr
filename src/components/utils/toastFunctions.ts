import { toast } from "react-toastify";

export const toastError = (msg) => {
  toast.error(msg, {
    hideProgressBar: true,
    autoClose: 2000,
  });
};

export const toastSuccess = (msg) => {
  toast.success(msg, {
    hideProgressBar: true,
    autoClose: 2000,
  });
};
