import { Button, FloatingLabel, ToggleSwitch } from "flowbite-react";
import { Text } from "../../ui/text/Text";
import { useViewLogin } from "./hooks/useViewLogin";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    forms: { loginForm, onSubmit },
  } = useViewLogin();
  return (
    <div className="p-8 bg-[#ffffffcc] dark:bg-[#00000077] rounded-lg w-90">
      <Text model="h1" className="text-center">
        Bienvenido
      </Text>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="mt-4">
        <div className="my-8 flex flex-col gap-4">
          <FloatingLabel
            {...loginForm.register("email", { required: true })}
            label="Email"
            variant="standard"
          />
          <FloatingLabel
            {...loginForm.register("password", {
              required: true,
              minLength: 6,
            })}
            label="Password"
            type="password"
            variant="standard"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ToggleSwitch
              sizing={"sm"}
              checked={true}
              onChange={() => console.log("This parameter is no modifier")}
              disabled
            />
            <Text model="sm">Remember me</Text>
          </div>
          <div>
            <Link to={"/auth/forgot"}>
              <Text model="sm">Forgot password?</Text>
            </Link>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full mt-4"
          disabled={!loginForm.formState.isValid}
        >
          Login
        </Button>
      </form>
    </div>
  );
};
