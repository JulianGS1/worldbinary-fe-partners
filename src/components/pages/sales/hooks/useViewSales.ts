import { useTable } from "../../../ui/table/useTable";
import { salesHeaders } from "../content/sales-table-headers";
import { salesDataMock } from "../mock/datamock";

export const useViewSales = () => {
  const headers = salesHeaders;
  const propsTable = useTable(headers);

  const data = salesDataMock;

  return {
    table: {
      data,
      headers,
      propsTable,
    },
  };
};
