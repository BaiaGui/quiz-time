
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { QuestionContainer } from './components/QuestionContainer'
import { Card } from './components/card'

function App() {


  return (
    <div className='bg-stone-950 w-screen h-screen flex justify-center items-center'>
    <div className='bg-zinc-900 px-36 py-16 rounded-md'>
    <div className=''>
      <Header/>
      <QuestionContainer>
        <Card/>
        <Card/>
        <Card/>
      </QuestionContainer>
      <Footer/>
    </div>
      
    </div>
    </div>
  )
}

export default App
