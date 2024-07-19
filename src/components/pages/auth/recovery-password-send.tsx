import { Helmet } from "react-helmet";
import config from "../../../config";
import { Text } from "../../ui/text/Text";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, FloatingLabel } from "flowbite-react";
import { useViewRecoveryPassSend } from "./hooks/useViewRecoveryPassSend";

export const RecoveryPasswordSend = () => {
  const {
    forms: { onSend, recoveryForm },
  } = useViewRecoveryPassSend();
  return (
    <>
      <Helmet>
        <title>Recovery password - {config.default_title}</title>
      </Helmet>
      <div className="p-8 bg-[#ffffffcc] dark:bg-[#00000077] rounded-lg w-90">
        <Link
          to="/auth/login"
          className="flex items-center gap-2 text-primary-800 py-1"
        >
          <MdArrowBack /> Volver al inicio de sisión
        </Link>
        <Text model="h2" className="mt-4">
          Ingrese su correo electrónico
        </Text>
        <form onSubmit={recoveryForm.handleSubmit(onSend)} className="mt-8">
          <FloatingLabel
            {...recoveryForm.register("email", {
              required: true,
              pattern:
                /^(([a-zA-Z0-9\-._]+)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            label="Correo electrónico"
            variant="standard"
          />
          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={!recoveryForm.formState.isValid}
          >
            Restablecer contraseña
          </Button>
        </form>
      </div>
    </>
  );
};
