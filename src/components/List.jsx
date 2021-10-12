/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react'
import TextField from '@mui/material/TextField'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import Data from './Data'
import mockColumns from '../assets/columns1'
import mockData from '../assets/mockData'

/**
 *
 * @return {Object} Component for Listing entities
 */
export default function List() {
  const [dateFilter, setDateFilter] = useState([new Date(), new Date()])
  // [null, null]
  const [dataList, setDataList] = useState(mockData)
  const [columns, setColumns] = useState(mockColumns)
  const [showResults, setShowResults] = useState(false)

  const search = () => {
    setShowResults(false)
    // Show loading animation

    // Do magic to get data filter by date range, result goes in setDataList

    setShowResults(true)
    // Stop loading animation
  }

  return (
    <div>
      <div className="filters">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            disableFuture
            inputFormat="dd/MM/yyyy"
            startText="Fecha desde"
            endText="Fecha hasta"
            value={dateFilter}
            onChange={(newValue) => {
              setDateFilter(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> a </Box>
                <TextField {...endProps} />
              </Fragment>
            )}
          />
        </LocalizationProvider>
        <Button onClick={search}>Buscar</Button>
        {showResults ? (
          <Data dataRows={dataList} dataColumns={columns} />
        ) : null}
      </div>
    </div>
  )
}
