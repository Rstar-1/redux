import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getallProducts } from "../redux/table/action";

const TableData = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.reducers.products);
  const loading = useSelector((state) => state.reducers.loading);
  const error = useSelector((state) => state.reducers.error);

  useEffect(() => {
    dispatch(getallProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <TableContainer className="border-collapse border border-slate-400 lg:mt-8">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th className="border border-slate-400">ID</Th>
              <Th className="border border-slate-400">Category</Th>
              <Th className="border border-slate-400">Title</Th>
              <Th className="border border-slate-400">Price</Th>
              <Th className="border border-slate-400">Description</Th>
            </Tr>
          </Thead>

          {allProducts && allProducts.length > 0 ? (
            allProducts.map((item) => (
             
                  <Tbody>
                    <Tr key={item.id}>
                      <Td className="border border-slate-400">{item.id}</Td>
                      <Td className="border border-slate-400">{item.category}</Td>
                      <Td className="border border-slate-400">{item.title}</Td>
                      <Td className="border border-slate-400">{item.price}</Td>
                      <Td className="border border-slate-400">
                        {item.description}
                      </Td>
                    </Tr>
                  </Tbody> 
                
            ))
          ) : (
            <Tr>
              <Td colSpan="4" className="text-center">
                No data available
              </Td>
            </Tr>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
