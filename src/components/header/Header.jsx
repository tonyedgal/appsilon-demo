import { AppBar, Toolbar, Link, Typography } from '@mui/material'
import appsilonLogo from '../../assets/appsilonLogo.svg'
import './header.scss'

export default function Header() {
  return (
    <>
      <AppBar color='inherit' elevation={0}>
        <Toolbar>
          <Link href='https://appsilon.com/' className='logo'>
            <img src={appsilonLogo} alt='logo' />
          </Link>
          <Typography
            variant='h5'
            sx={{ color: '#777e83', fontWeight: 700 }}
            className='typography'
          >
            Tony Edgal
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
