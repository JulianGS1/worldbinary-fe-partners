import { Container } from "../../ui/container/container";
import { TableComponent } from "../../ui/table/table-component";
import { useViewRecords } from "./hooks/useViewRecords";

export const Records = () => {
  const {
    table: { data, headers },
  } = useViewRecords();
  return (
    <Container title="Records">
      <TableComponent
        headers={headers}
        currentPage={1}
        totalPage={10}
        data={data}
      />
    </Container>
  );
};
