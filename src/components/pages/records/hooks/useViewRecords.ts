import { salesHeader } from "../../sales/mock/sales-headers";
import { datamock } from "../mock/datamock";

export const useViewRecords = () => {
  const data = datamock;
  const headers = salesHeader;

  return {
    table: {
      data,
      headers,
    },
  };
};
