import { Table } from "flowbite-react";
import { Container } from "../../ui/container/container";
import { useViewSales } from "./hooks/useViewSales";
import { salesHeader } from "./mock/sales-headers";

export const Sales = () => {
  const { data } = useViewSales();
  return (
    <Container title="Ventas y registros" className="w-full h-fit">
      <div className="w-fit h-full overflow-auto mt-4">
        <Table>
          <Table.Head>
            {salesHeader.map((head) => (
              <Table.HeadCell key={head} className="text-white">
                {head}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {data.map((row) => (
              <Table.Row key={row.saleId} className="text-white">
                <Table.Cell>{row.customerName}</Table.Cell>
                <Table.Cell>{row.customerEmail}</Table.Cell>
                <Table.Cell>{row.productName}</Table.Cell>
                <Table.Cell>{row.quantity}</Table.Cell>
                <Table.Cell>{row.saleDate}</Table.Cell>
                <Table.Cell>{row.totalAmount}</Table.Cell>
                <Table.Cell>{row.paymentMethod}</Table.Cell>
                <Table.Cell>{row.orderStatus}</Table.Cell>
                <Table.Cell>{row.registrationDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
};
