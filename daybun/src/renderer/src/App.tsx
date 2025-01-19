import './assets/main.css'
import Nav from './components/nav/Nav'
import ContextProvider from './contexts/Context'
import Chat from './routes/Chat'

function App(): JSX.Element {

  return (
    <ContextProvider>
      <main className="w-screen h-screen flex">
        <Nav />
        <Chat />
      </main>
    </ContextProvider>
  )
}

export default App
