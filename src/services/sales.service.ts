import axios from "axios";

export const SalesServices = () => {
  const findCustomers = async (
    code: string,
    page: string,
    sort: string,
    direction: string,
    amount: string
  ) => {
    return await axios.get(
      `/customers?sponsorCode=${code}&page=${page}&sort=${sort}-${direction}&size=${amount}`
    );
  };

  return { findCustomers };
};
