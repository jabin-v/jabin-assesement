import React from 'react'
import { useGetStockQuery } from '../../redux/services/assesmentApi';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from "@mui/material"

const Stock = () => {

    const { data:tableData, isFetching, error } = useGetStockQuery();


  return (
    <div></div>

  )
}



export default Stock