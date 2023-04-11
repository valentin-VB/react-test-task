import SearchIcon from "../../assets/search.svg";
import Pagination from "@/components/Pagination";
import CustomersTable from "@/components/CustomersTable";
import { customers } from "../../constants/constants";
import { useState } from "react";
import { IUser } from "@/types";

function Customers() {
  const [filter, setFilter] = useState("");

  const filteredCustomers = () => {
    if (!customers) return;
    return customers.filter(({ id, ...rest }) => {
      for (const key in rest) {
        if (rest[key as keyof typeof rest].includes(filter.trim())) {
          return true;
        }
      }
      return false;
    });
  };

  return (
    <section className="customers">
      <div className="customers__head_wrapper">
        <div>
          <h2 className="customers__header">All Customers</h2>
          <p className="customers__active_members ">Active Members</p>
        </div>
        <div className="customers__input_wrapper">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setFilter(e.currentTarget.value)}
          />
        </div>
      </div>
      <CustomersTable customers={filteredCustomers()} />
      <Pagination />
    </section>
  );
}

export default Customers;
