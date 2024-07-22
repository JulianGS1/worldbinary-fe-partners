import { Clipboard } from "flowbite-react";
import { useAuth } from "../../../context/auth/useAuth";
import { Container } from "../../ui/container/container";
import { Text } from "../../ui/text/Text";
import { Helmet } from "react-helmet";
import config from "../../../config";

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Dashboard - {config.default_title}</title>
      </Helmet>
      <Container title="Dashboard">
        <div className="w-full rounded-xl bg-gradient-to-br from-primary-900 to-primary-700 p-4">
          <Text model="h2">{`¡Bienvenido 👋!`}</Text>
          <Text className="mt-4 font-semibold">
            Comparte este enlace con tus contactos y bríndales increíbles
            beneficios
          </Text>
          {user?.userInfo?.partnerCode && (
            <div className="mt-8">
              <Text className="p-3 border rounded-xl mb-4 bg-[#00000077] truncate">
                {user?.userInfo.partnerCode}
              </Text>
              <Clipboard
                valueToCopy={user?.userInfo.partnerCode}
                label={"Copiar"}
              />
            </div>
          )}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Card title="Cantidad de depósitos" description="30" />
          <Card title="Fecha límite de acumulación" description="18/07/2025" />
        </div>
      </Container>
    </>
  );
};

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-900 to-primary-700">
      <Text model="sm" className="font-semibold">
        {title}
      </Text>
      <Text className="mt-3 text-2xl font-semibold">{description}</Text>
    </div>
  );
};
