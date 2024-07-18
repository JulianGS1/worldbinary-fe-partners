import { useParams } from "react-router-dom";

export const useSeparateParams = () => {
  const params = useParams();
  console.log(params);
};
