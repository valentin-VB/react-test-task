import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { IUser } from "../../types/index";

function CustomersTable({ customers }: { customers?: IUser[] }) {
  return (
    <Table>
      <Thead className="customers__table_head">
        <Tr>
          <Th>Customer Name</Th>
          <Th>Company</Th>
          <Th>Phone Number</Th>
          <Th>Email</Th>
          <Th>Country</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {customers &&
          customers.map(
            ({ id, name, company, number, email, country, status }) => (
              <Tr key={id}>
                <Td>{name}</Td>
                <Td>{company}</Td>
                <Td>{number}</Td>
                <Td>{email}</Td>
                <Td>{country}</Td>
                <Td>
                  <div
                    className={`customers__status customers__status--${status.toLowerCase()}`}
                  >
                    {status}
                  </div>
                </Td>
              </Tr>
            )
          )}
      </Tbody>
    </Table>
  );
}

export default CustomersTable;
