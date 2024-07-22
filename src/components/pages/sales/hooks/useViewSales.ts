import { useTable } from "../../../ui/table/useTable";
import { salesHeaders } from "../content/sales-table-headers";
import { salesDataMock } from "../mock/datamock";

export const useViewSales = () => {
  const propsTable = useTable(salesHeaders);
  const data = salesDataMock;

  return {
    table: {
      data,
      propsTable,
    },
  };
};
