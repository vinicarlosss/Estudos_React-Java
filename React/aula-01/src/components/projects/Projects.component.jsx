import './style.css'
import { cards } from '../../assets/index'
import imagemum from '../../assets/img/imagem-1-card.png'
import imagemdois from '../../assets/img/imagem-2-card.png'
import imagemdefault from '../../assets/img/no-image.png'

const renderizarImagem = (card) => {

    switch (card.image) {
        case "imagem-1-card":
            return imagemum


        case "imagem-2-card":
            return imagemdois
        default:
            return imagemdefault
            break;
    }

}

export function Projects() {

    return (
        <section id='recent-project'>
            <div className="recent-project-title">
                <span className="item-title">recent</span>
                <span className="item-subtitle">project</span>
            </div>
            <div className='recent-img'>
                {
                    cards.map((card, index) => {
                        return (
                            <div className='card' key={index}>
                                <img className='card-img' src={
                                    renderizarImagem(card)
                                } alt={card.alt} />
                                <span className='card-text'> {card.title ? card.title : "Lorem impsum title"}</span>
                                <span className='card-text'>{card.description ? card.description : "Lorem ipsum description"}</span>
                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}