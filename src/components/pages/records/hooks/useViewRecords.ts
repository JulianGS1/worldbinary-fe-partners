import { recordsHeaders } from "../content/record-table-headers";
import { datamock } from "../mock/datamock";

export const useViewRecords = () => {
  const data = datamock;
  const headers = recordsHeaders;

  return {
    table: {
      data,
      headers,
    },
  };
};
