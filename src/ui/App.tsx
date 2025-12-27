import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header'
import { RedactView } from '../components/RedactView/RedactView'

export default function App() {
  return (
    <div className='shell'>
      <Header />
      <RedactView />
      <Footer />
    </div>
  )
}
