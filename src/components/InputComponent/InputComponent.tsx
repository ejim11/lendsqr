import { useState } from "react";
import classes from "./InputComponent.module.scss";

const InputComponent = ({
  label,
  error,
  disabled,
  type,
  placeholder,
  name,
  validation,
  register,
  className,
}: {
  label: string;
  error: any;
  disabled: boolean;
  type: string;
  placeholder: string;
  name: string;
  validation: any;
  register: any;
  className: string;
}) => {
  const [visible, setVisible] = useState(false);

  const displayPassword = (): void => {
    setVisible(!visible);
  };
  return (
    <div className={`${classes["input-comp-container"]}`}>
      {label && <label>{label}</label>}
      <div className={classes["input-container"]}>
        <input
          disabled={disabled}
          type={type === "password" ? (visible ? "text" : "password") : type}
          placeholder={placeholder}
          {...register(name, validation)}
          className={`${className} ${
            error && error[name] && classes["error-input"]
          }`}
        />
        {type === "password" ? (
          <p onClick={displayPassword}>{visible ? "hide" : "show"}</p>
        ) : null}
      </div>
      {error && error[name] && (
        <small className={classes["error-msg"]}>{error[name].message}</small>
      )}
    </div>
  );
};

export default InputComponent;
