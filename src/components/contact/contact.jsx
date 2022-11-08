import React from 'react';
//import PropTypes from 'prop-types';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contactStyles.scss';

function Contact() {
return (
    <section id="contact">
        <h5>Restons en contact</h5>
        <h2>Contactez moi</h2>
        <div className="container__contact container">
            <div className="contact__options">
                <article className="contact__option">
                    <HiOutlineMail/>
                    <h4>Email</h4>
                    <h5>moretticlement@outlook.fr</h5>
                    <a href="mailto:moretticlement@outlook.fr" target='_blank'>Envoyez moi un message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine/>
                    <h4>Messenger</h4>
                    <h5>Moretti Clément</h5>
                    <a href="https://m.me/cle.cle.7731247" target='_blank'>Envoyez moi un message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp/>
                    <h4>Whatsapp</h4>
                    <h5>0628933984</h5>
                    <a href="https://api.whatsapp.com/send?phone+33628933984">Envoyez moi un message</a>
                </article>
            </div>
            <form action="">
                <input type="text" name='name' placeholder='Votre nom' required />
                <input type="text" name='email' placeholder='Votre email' required />
                <textarea name="message"  cols="30" rows="10" placeholder='Votre message'></textarea>
            </form>
        </div>
    </section>
);
}
//contact.propTypes = {};

//contact.defaultProps = {};

export default React.memo(Contact);