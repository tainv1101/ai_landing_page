import classNames from 'classnames/bind';
import style from './Artical.module.scss'

const sx = classNames.bind(style)
function Artical({src, title, date}) {
    return ( 
        <div className={sx('artical')}>
            <div className={sx('artical__image')}>
                <img src={src} alt={title} />
            </div>

            <div className={sx('artical__content')} >
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read Full Article</p>
            </div>
        </div>
     );
}

export default Artical;