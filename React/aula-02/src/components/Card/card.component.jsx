import { Container } from '../Container/container.component'
import './card.style.css'
import sortingHat from '../../assets/img/sorting-hat.png'

export function Card({ title, children, color, studentFunction }) {

    return (
        <Container className='card-container'>
            <header className='card-header' style={{ backgroundColor: color }}>

                <h2 className='card-title'>{title}</h2>
            </header>
            <ul className='card-list'>
                {children[0] == undefined ? <p className='card-text'>Não há alunos para essa casa de magia</p>:children.map((aluno, index) => {
                    return <li className='card-item' key={index} ><button className='student-button' onClick={() => studentFunction(title, aluno)}>
                    <>{aluno}</>
                    <img className='button-content-img' src={sortingHat}></img>
                    <img></img>
                    </button></li>
                })}
            </ul>



        </Container>


    )
}