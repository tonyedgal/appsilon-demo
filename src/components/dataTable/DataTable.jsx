import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function DataTable({ data }) {
  return (
    <TableContainer sx={{ maxWidth: 768, margin: 'auto' }} component={Paper}>
      <Table
        // size='small'
        sx={{ minWidth: 600, margin: 'auto' }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align='right'>No of Species</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.country}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.country}
              </TableCell>
              <TableCell align='right'>{row.numberOfSpecies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
