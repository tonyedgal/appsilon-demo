import { Toolbar } from '@mui/material'
import Header from '../header/Header'
import './layout.scss'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='page'>
        <Toolbar />
        {children}
      </div>
    </div>
  )
}
