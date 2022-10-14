import React from 'react'
import { useGetStockQuery } from '../../redux/services/assesmentApi';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from "@mui/material"

const Stock = () => {

    const { data:tableData, isFetching, error } = useGetStockQuery();

    console.log(tableData)


  return (
    <div>
        <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table>
    </div>

  )
}



export default Stock