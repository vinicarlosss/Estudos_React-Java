import './style.css'
import HomemSentado from '../../assets/img/homem-sentado-ilustracao.png'

export function Banner() {
    return (
        <section className='contact-us'>
            <div className="contact-info">
                <div className="contact-text">
                    <span className="contact-title">We create</span>
                    <span className="contact-title">digital products</span>
                    <span className="contact-title">as your solution</span>
                    <span className="contact-information">Web Design, Mobile Apps, IoT Solution</span>
                </div>

                <a href="#contact"><button className="contact-link">Contact us</button></a>
            </div>
            <div className="contact-img">
                <img src={HomemSentado} alt="homem sentado"/>
            </div>
        </section>
    )
}