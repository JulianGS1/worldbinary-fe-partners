import { useState } from "react";
import { salesDataMock } from "../mock/datamock";
import { salesHeaders } from "../content/sales-table-headers";

export const useViewSales = () => {
  const [page, setPage] = useState(1);
  const data = salesDataMock;
  const headers = salesHeaders;

  return {
    table: {
      page,
      setPage,
      data,
      headers,
    },
  };
};
