import classNames from 'classnames/bind';
import style from './Header.module.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const sx = classNames.bind(style)
function Header() {
    return ( 
       <div id='home' className={sx('header', 'section__padding')} >
        <div className={sx('header__content')} >
          <h1 className={sx('gradient__text')}> Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className={sx('header__content-input')} >
            <input type='email' placeholder='Your Email Address....' />
            <button type='button'> Get Started</button>
          </div>
          <div className={sx('header__content-people')}>
            <img src={people} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
         <div className={sx('header__image')}> <img  src={ai} alt='ai' /></div>
       </div>
     );
}

export default Header;