// eslint-disable-next-line require-jsdoc
function createData(id, name, code, population, size) {
  const density = population / size
  return { id, name, code, population, size, density }
}

const rows = [
  createData('0001', 'India', 'IN', 1324171354, 3287263),
  createData('0002', 'China', 'CN', 1403500365, 9596961),
  createData('0003', 'Italy', 'IT', 60483973, 301340),
  createData('0004', 'United States', 'US', 327167434, 9833520),
  createData('0005', 'Canada', 'CA', 37602103, 9984670),
  createData('0006', 'Australia', 'AU', 25475400, 7692024),
  createData('0007', 'Germany', 'DE', 83019200, 357578),
  createData('0008', 'Ireland', 'IE', 4857000, 70273),
  createData('0009', 'Mexico', 'MX', 126577691, 1972550),
  createData('0010', 'Japan', 'JP', 126317000, 377973),
  createData('0011', 'France', 'FR', 67022000, 640679),
  createData('0012', 'United Kingdom', 'GB', 67545757, 242495),
  createData('0013', 'Russia', 'RU', 146793744, 17098246),
  createData('0014', 'Nigeria', 'NG', 200962417, 923768),
  createData('0015', 'Brazil', 'BR', 210147125, 8515767),
]

export default rows

// eslint-disable-next-line require-jsdoc
function createDataGrid(id, name, code, population, size) {
  const density = population / size
  return {
    id: id,
    name: name,
    code: code,
    population: population,
    size: size,
    density: density,
  }
}

export const rowsGrid = [
  createDataGrid('0001', 'India', 'IN', 1324171354, 3287263),
  createDataGrid('0002', 'China', 'CN', 1403500365, 9596961),
  createDataGrid('0003', 'Italy', 'IT', 60483973, 301340),
  createDataGrid('0004', 'United States', 'US', 327167434, 9833520),
  createDataGrid('0005', 'Canada', 'CA', 37602103, 9984670),
  createDataGrid('0006', 'Australia', 'AU', 25475400, 7692024),
  createDataGrid('0007', 'Germany', 'DE', 83019200, 357578),
  createDataGrid('0008', 'Ireland', 'IE', 4857000, 70273),
  createDataGrid('0009', 'Mexico', 'MX', 126577691, 1972550),
  createDataGrid('0010', 'Japan', 'JP', 126317000, 377973),
  createDataGrid('0011', 'France', 'FR', 67022000, 640679),
  createDataGrid('0012', 'United Kingdom', 'GB', 67545757, 242495),
  createDataGrid('0013', 'Russia', 'RU', 146793744, 17098246),
  createDataGrid('0014', 'Nigeria', 'NG', 200962417, 923768),
  createDataGrid('0015', 'Brazil', 'BR', 210147125, 8515767),
]
