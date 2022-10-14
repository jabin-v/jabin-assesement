import React from 'react'
import { useGetStockQuery } from '../../redux/services/assesmentApi';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from "@mui/material"

const Stock = () => {

    const { data:tableData, isFetching, error } = useGetStockQuery();


  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'></Table>
        <TableHead>
            <TableRow>
                <TableCell>Product_Id</TableCell>
                <TableCell>Product_Name</TableCell>
            </TableRow>
        </TableHead>
        <TableBody></TableBody>

    </TableContainer>
  )
}



export default Stock