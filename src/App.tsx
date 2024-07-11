import { Box, CssBaseline, ThemeProvider, Typography, styled } from '@mui/material'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaymentMethod from './pages/payment-method'
import PaymentProvider from './context/provider'
import PixAndCreditCard from './pages/pix+credit-card'
import { theme } from './theme'

import WooviLogo from './assets/logo.svg?react'
import WooviLogoGrey from './assets/logo-small.svg?react'


const router = createBrowserRouter([
  {
    path: '/',
    element: <PaymentMethod />,
  },
  {
    path: '/pix+credit-card',
    element: <PixAndCreditCard />
  },
])

const Logo = styled(WooviLogo)({
  marginBottom: 32
})

const SmallLogo = styled(WooviLogoGrey)({
  width: '3em',
  height: 'auto',
  position: 'relative',
  top: '.3em'
})

const Footer = styled(Box)(({ theme }) => ({
  marginTop: '2em',
  color: theme.palette.grey[400],
  //verticalAlign: 'middle',
  //display: 'inline-flex',
  lineHeight: '3em'
}))

function App() {
  return (
    <>
      <CssBaseline />
      <PaymentProvider>
        <ThemeProvider theme={theme}>
          <Box sx={{
            padding: '2rem',
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}>
            <Logo />
            <RouterProvider router={router} />
            <Footer>
              <Typography variant="caption">Pagamento 100% seguro via:&nbsp;</Typography>
              <SmallLogo />
            </Footer>
          </Box>
        </ThemeProvider>
      </PaymentProvider>
    </>
  )
}

export default App
