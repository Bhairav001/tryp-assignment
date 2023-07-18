import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td,Button } from '@chakra-ui/react';

// Define the type for your data (replace this with your actual data structure)
type TableRowData = {
  id: number;
  name: string;
  age: number;
  email: string;
  timeStapm:String;
  purchaseid:String;
  source:String,
  status:String
};

// Sample data (replace this with your actual data)
const data: TableRowData[] = [
  { id: 1, timeStapm:"35 min ago", name: 'John Doe', age: 28, email: 'john@example.com',purchaseid:"12455",source:"",status:"Failed" },
  { id: 2, timeStapm:"5 min ago", name: 'John Doe', age: 28, email: 'john@example.com',purchaseid:"12455",source:"",status:"Failed" },
  { id: 3, timeStapm:"5 min ago", name: 'John Doe', age: 28, email: 'john@example.com',purchaseid:"12455",source:"",status:"Failed" },
  { id: 4, timeStapm:"30 min ago", name: 'John Doe', age: 28, email: 'john@example.com',purchaseid:"12455",source:"",status:"Failed" },
  { id: 5, timeStapm:"35 min ago", name: 'John Doe', age: 28, email: 'john@example.com',purchaseid:"12455",source:"",status:"Failed" },
  { id: 8, timeStapm:"35 min ago", name: 'John Doe', age: 28, email: 'john@example.com',purchaseid:"12455",source:"",status:"Failed" },

  // Add more data here
];

const ChakraUITable: React.FC = () => {
  return (
    <Box>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Timestamp</Th>
            <Th>PurchaseId</Th>
            <Th>Mail</Th>
            <Th>Name</Th>
            <Th>Source</Th>
            <Th>Status</Th>
            <Th>Select</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              <Td>{row.timeStapm}</Td>
              <Td>{row.purchaseid}</Td>
              <Td>{row.email}</Td>
              <Td>{row.name}</Td>
              <Td>{row.source}</Td>
              <Td>{row.status}</Td>
              <Td><Button>Select</Button></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ChakraUITable;
