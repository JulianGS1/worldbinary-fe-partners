import { Pagination, Table } from "flowbite-react";
import { IHeaders } from "./table.interface";

interface Props<T> {
  headers: IHeaders[];
  currentPage: number;
  totalPage: number;
  data: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableComponent = <T extends Record<string, any>>({
  headers,
  currentPage,
  totalPage,
  data,
}: Props<T>) => {
  return (
    <>
      <div className="overflow-auto">
        <Table striped>
          <Table.Head>
            {headers.map((head) => (
              <Table.HeadCell key={head.key} className="text-white text-center">
                {head.label}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {data.map((element, index) => (
              <Table.Row key={index}>
                {headers.map((head, index) => (
                  <Table.Cell className="text-center" key={index}>
                    {element[head.key]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
};
