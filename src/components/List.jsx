/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react'
import TextField from '@mui/material/TextField'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import { Button, Divider } from '@mui/material'
import DataTable from './DataTable'
import { columnsGrid as mockColumns } from '../assets/columns1'
import { rowsGrid as mockData } from '../assets/mockData'

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
    return true
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
                <div className="searchButtonDiv">
                  <Button variant="contained" onClick={search}>
                    Buscar
                  </Button>
                </div>
              </Fragment>
            )}
          />
        </LocalizationProvider>

        <Divider />
        {showResults ? (
          <DataTable dataRows={dataList} dataColumns={columns} />
        ) : null}
      </div>
    </div>
  )
}
