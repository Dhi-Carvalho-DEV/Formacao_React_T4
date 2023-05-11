import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const newContributorAdd = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form text="Preencha os dados para criar o card do colaborador." registeredEmployee={colaborador => newContributorAdd(colaborador)} />
    </div>
  )
}

export default App
