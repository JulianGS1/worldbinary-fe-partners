import { Alert, Button, FloatingLabel, ToggleSwitch } from "flowbite-react";
import { Helmet } from "react-helmet";
import { MdError, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import config from "../../../config";
import { Text } from "../../ui/text/Text";
import { useViewLogin } from "./hooks/useViewLogin";

export const Login = () => {
  const {
    forms: { loginForm, onSend, resetForm },
    query: { loginMutate, verifyMutate },
    states: { codeSend, errorMessage, passwordType, togglePassword },
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
              disabled={codeSend}
            />
            <div className="relative">
              <FloatingLabel
                {...loginForm.register("password", {
                  required: true,
                  minLength: 6,
                })}
                label="Password"
                type={passwordType}
                variant="standard"
                disabled={codeSend}
              />
              <button
                className="absolute right-4 top-3"
                onClick={togglePassword}
                type="button"
              >
                <MdRemoveRedEye className="text-white" size={20} />
              </button>
            </div>
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
              <Link to={"/auth/recover-password"}>
                <Text model="sm">Forgot password?</Text>
              </Link>
            </div>
          </div>
          {errorMessage && (
            <Alert color={"failure"} icon={MdError} className="my-4">
              {errorMessage}
            </Alert>
          )}
          <Button
            type="submit"
            className="w-full my-4"
            disabled={!loginForm.formState.isValid}
            isProcessing={loginMutate.isLoading || verifyMutate.isLoading}
          >
            Login
          </Button>
          {codeSend && (
            <Button className="w-full" onClick={resetForm} color={"gray"}>
              Limpiar
            </Button>
          )}
        </form>
      </div>
    </>
  );
};
