/* eslint-disable react/prop-types */
import { useState, createRef, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
/**
 * @param {Object} dataRows Data to show in component
 * @param {Object} dataColumns Columnlist to configure Component
 * @return {Object} Configurable ListData Component
 */
export default function Data({ dataRows, dataColumns }) {
  // eslint-disable-next-line no-unused-vars
  const [rows, setRows] = useState(dataRows)
  // eslint-disable-next-line no-unused-vars
  const [columns, setColumns] = useState(dataColumns)
  const tableRef = createRef()

  useEffect(() => {
    setTimeout(() => {
      executeScroll()
    }, 400)
  }, [])

  const executeScroll = () => {
    tableRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }} ref={tableRef}>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  )
}
