const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

export default columns

export const columnsGrid = [
  { field: 'name', headerName: 'Name', width: 170, sortable: true },
  { field: 'code', headerName: 'ISO\u00a0Code', width: 100, sortable: true },
  {
    field: 'population',
    headerName: 'Population',
    width: 170,
    align: 'right',
    sortable: true,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'size',
    headerName: 'Size\u00a0(km\u00b2)',
    width: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'density',
    headerName: 'Density',
    width: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]
