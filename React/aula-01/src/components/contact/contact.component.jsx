import './style.css'
import HomemRegando from '../../assets/img/homem-regando-ilustracao.png'
import IconeEmail from '../../assets/img/email-icon.png'
import IconeWpp from '../../assets/img/whatsapp-icon.png'

export function Contact(){
    return(
        <section id="contact">
        <div className="contact-us-information">
            <strong className="contact-us-title">Contact us</strong>
            <span className="contact-us-text">Are you interested in working with us or just</span>
            <span className="contact-us-text">want to ask question?</span>
            <div className="contact-us-info">
                <div className="contact-us-email">
                    <img className="contact-us-icon" src={IconeWpp} alt="ícone de e-mail"/>
                    <span className="contact-us-text">ridwansolehsaputra@gmail.com</span>
                </div>
                <div className="contact-us-wpp">
                    <img className="contact-us-icon" src={IconeEmail} alt="ícone de e-mail"/>
                    <span className="contact-us-text">089628147748</span>
                </div>
            </div>
        </div>
        <div className="contact-image">
            <img src={HomemRegando} alt="ilustração homem regando"/>
        </div>

    </section>

    )
}