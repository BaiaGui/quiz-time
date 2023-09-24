
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { QuestionContainer } from './components/QuestionContainer'
import { Card } from './components/card'
import reactLogo from './assets/react.svg'

function App() {


  return (
    <div className='bg-stone-950 w-screen h-screen flex justify-center items-center'>
    <div className='bg-zinc-900 px-36 py-16 rounded-md'>
    <div className=''>
      <Header/>
      <QuestionContainer>
        <Card value={true} answer="1+1 é 2" imgLabel={reactLogo}/>
        <Card value={false} answer="1+1 é 11" imgLabel={reactLogo}/>
        <Card value={false} answer="1+1 é 3" imgLabel={reactLogo}/>
      </QuestionContainer>
      <Footer/>
    </div>
      
    </div>
    </div>
  )
}

export default App
