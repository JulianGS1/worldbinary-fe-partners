import { useTable } from "../../../ui/table/useTable";
import { recordsHeaders } from "../content/record-table-headers";
import { datamock } from "../mock/datamock";

export const useViewRecords = () => {
  const propsTable = useTable(recordsHeaders);
  const data = datamock;

  return {
    table: {
      data,
      propsTable,
    },
  };
};
