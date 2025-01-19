import './assets/main.css'
import Nav from './components/nav/Nav'
import { Context } from './contexts/Context'
import Chat from './routes/Chat'
import { useContext } from 'react'

function App(): JSX.Element {
  const context = useContext(Context);

  return (
    <Context.Provider value={context} >
      <main className="w-screen h-screen flex">
        <Nav />
        <Chat />
      </main>
    </Context.Provider>
  )
}

export default App
