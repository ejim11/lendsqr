import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent from "../InputComponent/InputComponent";
import { inputValidators } from "../utils/formValidation";
import classes from "./LoginForm.module.scss";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      reset({
        email: "",
        password: "",
      });
      navigate("/dashboard", { replace: true });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
      <InputComponent
        placeholder={"Email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        validation={inputValidators.email}
        label={""}
        disabled={false}
        className={classes.input}
      />
      <InputComponent
        placeholder={"Password"}
        type={"password"}
        register={register}
        error={errors}
        name={"password"}
        validation={inputValidators.password}
        label={""}
        disabled={false}
        className={classes.input}
      />
      <p className={classes["forgot-password"]}>forgot password?</p>
      <button type="submit" className={classes.btn}>
        {loading ? (
          <ReactLoading type={"cylon"} color={"#fff"} height={20} width={20} />
        ) : (
          "log in"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
