import { Container, Button, Card } from "./components";
import { useState } from "react";
import './app.style.css'
import sortingHat from './assets/img/sorting-hat.png'
import { alunos } from "./alunos";

const sortNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1
}

function App() {
  
  //STATES PARA AS CASAS

  const [gryffindor, setGryffindor] = useState([])
  const [slytherin, setSlytherin] = useState([])
  const [hufflepuff, setHufflepuff] = useState([])
  const [ravenclaw, setRavenclaw] = useState([])


  //FUNÇÃO PARA SORTEAR OS ESTUDANTES PARA AS CASAS
  const sortStudents = (alunos) => {
    let number = 0
    setGryffindor([])
    setSlytherin([])
    setHufflepuff([])
    setRavenclaw([])
    alunos.map(aluno => {
      number = sortNumber(1, 4)
      switch (number) {
        case 1:
          setGryffindor(lastGryffindor => [...lastGryffindor, aluno])
          break
        case 2:
          setSlytherin(lastSlytherin => [...lastSlytherin, aluno])
          break
        case 3:
          setHufflepuff(lastHufflepuff => [...lastHufflepuff, aluno])
          break
        case 4:
          setRavenclaw(lastRavenclaw => [...lastRavenclaw, aluno])
          break
        default:
          break
      }

    })
  }

  //FUNÇÃO QUE SORTEIA UM ÚNICO ESTUDANTE PARA OUTRA CASA
  const sortOnlyOneStudent = (house, student) => {
    let number = sortNumber(1, 3)
    switch (house) {
      case 'GRYFFINDOR':
        if (number === 1) {

          setSlytherin(lastSlytherin => [...lastSlytherin, student])
          setGryffindor(lastGryffindor => {
            const index = lastGryffindor.indexOf(student)
            if (index != -1) {
              
              lastGryffindor.splice(index, 1)
            }
            return [...lastGryffindor]
          })
        } else if (number === 2) {
          setHufflepuff(lastHufflepuff => [...lastHufflepuff, student])
          setGryffindor(lastGryffindor => {
            const index = lastGryffindor.indexOf(student)
            if (index != -1) {
              
              lastGryffindor.splice(index, 1)
            }
            return [...lastGryffindor]
          })
        } else if (number === 3) {
          setRavenclaw(lastRavenclaw => [...lastRavenclaw, student])
          setGryffindor(lastGryffindor => {
            const index = lastGryffindor.indexOf(student)
            if (index != -1) {
              
              lastGryffindor.splice(index, 1)
            }
            return [...lastGryffindor]
          })
        }
        break;
      case 'SLYTHERIN':
        if (number === 1) {
          setGryffindor(lastGryffindor => [...lastGryffindor, student])
          setSlytherin(lastSlytherin => {
            const index = lastSlytherin.indexOf(student)
            if (index != -1) {
              
              lastSlytherin.splice(index, 1)
            }
            return [...lastSlytherin]
          })
        } else if (number === 2) {
          setHufflepuff(lastHufflepuff => [...lastHufflepuff, student])
          setSlytherin(lastSlytherin => {
            const index = lastSlytherin.indexOf(student)
            if (index != -1) {
              
              lastSlytherin.splice(index, 1)
            }
            return [...lastSlytherin]
          })
        } else if (number === 3) {
          setRavenclaw(lastRavenclaw => [...lastRavenclaw, student])
          setSlytherin(lastSlytherin => {
            const index = lastSlytherin.indexOf(student)
            if (index != -1) {
              
              lastSlytherin.splice(index, 1)
            }
            return [...lastSlytherin]
          })
        }
        break;
      case 'HUFFLEPUFF':

        if (number === 1) {

          setGryffindor(lastGryffindor => [...lastGryffindor, student])
          setHufflepuff(lastHufflepuff => {
            const index = lastHufflepuff.indexOf(student)
            if (index != -1) {
              
              lastHufflepuff.splice(index, 1)
            }
            return [...lastHufflepuff]
          })

        } else if (number === 2) {

          setSlytherin(lastSlytherin => [...lastSlytherin, student])
          setHufflepuff(lastHufflepuff => {
            const index = lastHufflepuff.indexOf(student)
            if (index != -1) {
              
              lastHufflepuff.splice(index, 1)
            }
            return [...lastHufflepuff]
          })

        } else if (number === 3) {

          setRavenclaw(lastRavenclaw => [...lastRavenclaw, student])
          setHufflepuff(lastHufflepuff => {
            const index = lastHufflepuff.indexOf(student)
            if (index != -1) {
              
              lastHufflepuff.splice(index, 1)
            }
            return [...lastHufflepuff]
          })
        }

        break;
      case 'RAVENCLAW':
        if (number === 1) {

          setGryffindor(lastGryffindor => [...lastGryffindor, student])
          setRavenclaw(lastRavenclaw => {
            const index = lastRavenclaw.indexOf(student)
            if (index != -1) {
              
              lastRavenclaw.splice(index, 1)
            }
            return [...lastRavenclaw]
          })

        } else if (number === 2) {

          setSlytherin(lastSlytherin => [...lastSlytherin, student])
          setRavenclaw(lastRavenclaw => {
            const index = lastRavenclaw.indexOf(student)
            if (index != -1) {
              
              lastRavenclaw.splice(index, 1)
            }
            return [...lastRavenclaw]
          })

        } else if (number === 3) {

          setHufflepuff(lastHufflepuff => [...lastHufflepuff, student])
          setRavenclaw(lastRavenclaw => {
            const index = lastRavenclaw.indexOf(student)
            if (index != -1) {
              
              lastRavenclaw.splice(index, 1)
            }
            return [...lastRavenclaw]
          })

        }
        break;
      default:
        break;
    }
  }


  return (
    <Container className="app-container">
      <header><h1 className="header-title">Sorting Hat</h1></header>

      <Container className='container-cards'>

        <Card color={'red'} title='GRYFFINDOR' studentFunction={sortOnlyOneStudent}>
          {gryffindor}
        </Card>

        <Card color={'green'} title='SLYTHERIN' studentFunction={sortOnlyOneStudent}>
          {slytherin}
        </Card>
        <Card color={'yellow'} title='HUFFLEPUFF' studentFunction={sortOnlyOneStudent}>
          {hufflepuff}

        </Card>

        <Card color={'blue'} title='RAVENCLAW' studentFunction={sortOnlyOneStudent}>

          {ravenclaw}

        </Card>

      </Container>
      <Button onclick={sortStudents} alunos={alunos}><img className="button-img" src={sortingHat} alt="Sorting Hat"></img></Button>
    </Container>


  )
}

export default App;
