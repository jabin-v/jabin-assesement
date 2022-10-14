import React from 'react'
import { useGetStockQuery } from '../../redux/services/assesmentApi'

const Stock = () => {

    const { data, isFetching, error } = useGetStockQuery();


    console.log(data)

  return (
    <div>Stock</div>
  )
}

export default Stock