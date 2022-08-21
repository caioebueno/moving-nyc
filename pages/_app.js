import '../styles/globals.css'
import { FormProvider } from 'upscale-forms'

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider
      preLoad={[28, 29]}
    >
      <Component {...pageProps} />
    </FormProvider>
  )
}

export default MyApp
