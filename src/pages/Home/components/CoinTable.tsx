import { useEffect, useState } from "react";
import { getData } from "../../../utils/api";
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

const CoinTable = () => {
  const headers = [
    'Name',
    'Price',
    '1h %',
    '24h %',
    '7d %',
    'Market Cap',
  ];

  return (
    <div className="h-[2100px] overflow-auto px-100">
      <TableHeader thArray={headers} />
      <TableBody />
    </div>
  )
}

export default CoinTable