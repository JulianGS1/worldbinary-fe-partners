import { useState } from "react";
import { IHeaders } from "./table.interface";

export const useTable = (headers: IHeaders[]) => {
  const [column, setColumn] = useState<string>(headers[0].key);
  const [direction, setDirection] = useState<"asc" | "desc">("asc");
  const [pages, setPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [amount, setAmount] = useState<number>(10);

  const changeDirection = () => {
    if (direction === "asc") {
      setDirection("desc");
    }
    if (direction === "desc") {
      setDirection("asc");
    }
  };

  const onChangeColumn = (column: string) => {
    setColumn((prev) => {
      if (prev == column) {
        changeDirection();
        return prev;
      } else {
        setDirection("asc");
        return column;
      }
    });
  };

  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const onChangeAmount = (newPage: number) => {
    setAmount(newPage);
  };

  return {
    pages,
    currentPage,
    amount,
    column,
    direction,
    onChangeColumn,
    onChangePage,
    onChangeAmount,
    setPages,
    headers,
  };
};
