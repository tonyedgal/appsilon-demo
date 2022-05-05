import { Container, Typography } from '@mui/material'
import DataTable from '../../components/dataTable/DataTable'
import BarChart from '../../components/barchart/BarChart'

function createData(country, numberOfSpecies) {
  return { country, numberOfSpecies }
}

const data = [
  createData('Spain', 1412668),
  createData('France', 1169118),
  createData('Germany', 1010174),
  createData('Portugal', 285434),
  createData('Austria', 200981),
  createData('Greece', 188902),
  createData('Switzerland', 161456),
  createData('Romania', 156773),
  createData('Gambia', 130255),
  createData('Poland', 56744)
]

export default function Dashboard() {
  return (
    <>
      <Container className='container'>
        <Typography
          variant='h4'
          sx={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          Comparing Nature Data from Poland to Top Ten Countries from Around the
          World ( excl. Netherland)
        </Typography>
        <BarChart data={data} />
        <DataTable data={data} />
      </Container>
    </>
  )
}
