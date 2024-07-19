import { Container } from "../../ui/container/container";
import { TableComponent } from "../../ui/table/table-component";
import { useViewSales } from "./hooks/useViewSales";

export const Sales = () => {
  const {
    table: { page, data, headers },
  } = useViewSales();
  return (
    <Container title="Ventas">
      <TableComponent
        headers={headers}
        currentPage={page}
        totalPage={page}
        data={data}
      />
    </Container>
  );
};
