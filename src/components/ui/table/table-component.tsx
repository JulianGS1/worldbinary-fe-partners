import clsx from "clsx";
import { Pagination, Select, Table } from "flowbite-react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IHeaders } from "./table.interface";

interface Props<T> {
  data: T[];
  props: {
    headers: IHeaders[];
    pages: number;
    currentPage: number;
    amount: number;
    column: string;
    direction: "asc" | "desc";
    onChangeColumn: (column: string) => void;
    onChangePage: (page: number) => void;
    onChangeAmount: (amount: number) => void;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableComponent = <T extends Record<string, any>>({
  data,
  props,
}: Props<T>) => {
  return (
    <>
      <div className="overflow-auto">
        <Table striped>
          <Table.Head>
            {props.headers.map((head) => (
              <Table.HeadCell
                key={head.key}
                className={clsx(
                  "text-gray-400 text-center cursor-pointer",
                  props.column == head.key && "text-white"
                )}
                onClick={() => props.onChangeColumn(head.key)}
              >
                <div className="flex items-center">
                  <p className="text-center mx-auto">{head.label}</p>
                  {props.column == head.key && props.direction == "asc" && (
                    <MdArrowDropUp size={20} />
                  )}
                  {props.column == head.key && props.direction == "desc" && (
                    <MdArrowDropDown size={20} />
                  )}
                </div>
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {data.map((element, index) => (
              <Table.Row key={index}>
                {props.headers.map((head, index) => (
                  <Table.Cell className="text-center" key={index}>
                    {element[head.key]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex items-center justify-between gap-4 mt-2">
        <Pagination
          className="h-full"
          currentPage={props.currentPage}
          totalPages={props.pages}
          onPageChange={props.onChangePage}
        />
        <Select
          id="pages"
          className="h-full"
          value={props.amount}
          onChange={(e) => props.onChangeAmount(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </Select>
      </div>
    </>
  );
};
