import { Alert, Button, FloatingLabel, ToggleSwitch } from "flowbite-react";
import { Text } from "../../ui/text/Text";
import { useViewLogin } from "./hooks/useViewLogin";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
import { Helmet } from "react-helmet";
import config from "../../../config";

export const Login = () => {
  const {
    forms: { loginForm, onSend },
    query: { loginMutate, verifyMutate },
    states: { codeSend, errorMessage },
  } = useViewLogin();
  return (
    <>
      <Helmet>
        <title>Login - {config.default_title}</title>
      </Helmet>
      <div className="p-8 bg-[#ffffffcc] dark:bg-[#00000077] rounded-lg w-90">
        <Text model="h1" className="text-center">
          Bienvenido
        </Text>
        <form onSubmit={loginForm.handleSubmit(onSend)} className="mt-4">
          <div className="my-8 flex flex-col gap-4">
            <FloatingLabel
              {...loginForm.register("email", {
                required: true,
                pattern:
                  /^(([a-zA-Z0-9\-._]+)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
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
            {codeSend && (
              <FloatingLabel
                {...loginForm.register(
                  "code",
                  codeSend ? { required: true, minLength: 6 } : undefined
                )}
                label="Code"
                variant="standard"
              />
            )}
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
          {errorMessage && (
            <Alert color={"failure"} icon={MdError}>
              {errorMessage}
            </Alert>
          )}
          <Button
            type="submit"
            className="w-full mt-4"
            disabled={!loginForm.formState.isValid}
            isProcessing={loginMutate.isLoading || verifyMutate.isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
