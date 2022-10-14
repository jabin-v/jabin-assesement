import React from 'react'
import { useGetStockQuery } from '../../redux/services/assesmentApi';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from "@mui/material"

const Stock = () => {

    const { data:tableData, isFetching, error } = useGetStockQuery();


  return (
    <TableContainer  sx={{ maxHeight: '300px' }} component={Paper}>
        <Table aria-label='simple table'></Table>
        <TableHead>
            <TableRow>
                <TableCell>Product_Id</TableCell>
                <TableCell>Product_Name</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData?.map((item)=>(
                    <TableRow 
                    key={item._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
              <TableCell>{item.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>

    </TableContainer>
  )
}



export default Stock