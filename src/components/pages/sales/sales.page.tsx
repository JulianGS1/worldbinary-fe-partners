import { Container } from "../../ui/container/container";
import { TableComponent } from "../../ui/table/table-component";
import { useViewSales } from "./hooks/useViewSales";

export const Sales = () => {
  const {
    table: { data, headers, propsTable },
  } = useViewSales();
  return (
    <Container title="Ventas">
      <TableComponent headers={headers} data={data} props={propsTable} />
    </Container>
  );
};
