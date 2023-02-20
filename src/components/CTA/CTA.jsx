import classNames from 'classnames/bind';
import style from './CTA.module.scss'

const sx = classNames.bind(style)
function CTA() {
    return ( 
        <div className={sx('cta')} >
            <div className={sx('cta__content')}>
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>

            <div className={sx('cta__btn')}>
                <button type='button'>Get Started</button>

            </div>
        </div>
     );
}

export default CTA;