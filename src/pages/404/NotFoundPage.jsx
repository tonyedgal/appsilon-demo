import { Container, Typography } from '@mui/material'

export default function NotFoundPage() {
  return (
    <>
      <Container className='container'>
        <Typography
          variant='h3'
          sx={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          404
        </Typography>
        <Typography
          variant='body2'
          sx={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          You found a page that does not exist... How did you do that?
          <br />
          You must be a genie 😱
        </Typography>
      </Container>
    </>
  )
}
