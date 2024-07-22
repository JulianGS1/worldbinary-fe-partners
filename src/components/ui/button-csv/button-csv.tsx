import { Button } from "flowbite-react";
import * as XLSX from "xlsx";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files: any;
  title: string;
}

export const ButtonCsv = ({ files, title }: Props) => {
  const getFileNameWithCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${title} ${day}-${month}-${year}.xlsx`;
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(files);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = getFileNameWithCurrentDate();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };
  return <Button onClick={exportToCSV}>Exportar datos</Button>;
};
