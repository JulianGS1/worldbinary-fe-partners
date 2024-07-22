import { Container } from "../../ui/container/container";
import { TableComponent } from "../../ui/table/table-component";
import { useViewRecords } from "./hooks/useViewRecords";

export const Records = () => {
  const {
    table: { data, propsTable },
  } = useViewRecords();
  return (
    <Container title="Registros">
      <TableComponent props={propsTable} data={data} />
    </Container>
  );
};
