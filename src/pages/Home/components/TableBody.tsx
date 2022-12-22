import TableRow from "./TableRow"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../../app/store"
import { getInitialData } from "../../../slices/dataSlice"

const TableBody = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, searchQuery, isLoading } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(getInitialData())
  }, [])

  console.log(data)
  return (
    <div>
      {data.length === 0 &&
        <div className='flex flex-col items-center justify-center text-white font-bold'>
          <p className='text-[64px]'>{`(>__<)`}</p>
          <p className='text-3xl'>Ooops, No data To Display</p>
        </div>
      }
      {data && data.map((row: RowProps, index: number) =>
        <TableRow data={{
          index: index + 1,
          id: row.id,
          name: row.name,
          slug: row.slug,
          symbol: row.symbol,
          price: row.quote.USD.price,
          percent_change_1h: row.quote.USD.percent_change_1h,
          percent_change_24h: row.quote.USD.percent_change_24h,
          percent_change_7d: row.quote.USD.percent_change_7d,
          market_cap: row.quote.USD.market_cap
        }} key={`row-${index}`} />
      )}
    </div>
  )
}

interface RowProps {
  id: number
  name: string
  slug: string
  symbol: string
  quote: {
    USD: {
      price: number
      percent_change_1h: number
      percent_change_24h: number
      percent_change_7d: number
      market_cap: number
    }
  }
}

export default TableBody