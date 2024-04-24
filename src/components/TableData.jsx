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
import { fetchAllProducts } from "../redux/table/action";

const TableData = () => {
  const [grids, setGrids] = useState(true);

  const handleGrids = () => {
    setGrids(!grids);
  };

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  console.log(allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="fsize24 text-center">
        Table Data{" "}
        <div className="cursor-pointer" onClick={handleGrids}>
          Click me to toggle active class
        </div>
      </h2>

      <div className="w-full flex">
        {/* <div className={`${grids ? "grid grid-cols-4" : "grid grid-cols-3"}`}>
        {allProducts && allProducts.length > 0
          ? allProducts.map((item) => <p className="border">{item.title}</p>)
          : "nodata"}
      </div> */}

      </div>

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
              <>
                {item.category === "men's clothing" ?
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
                  </Tbody> : null
                }
              </>
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
