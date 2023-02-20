import classNames from 'classnames/bind';
import style from './Feature.module.scss'

const sx = classNames.bind(style)
function Feature({column,row,text,title}) {

    const classes=sx('feature', {
        column,
        row,
    })

    return ( 
       <div className={classes} >
            <div className={sx('feature__title')}>
                <div  />
                <h1>{title}</h1>
            </div>
            <div className={sx('feature__text')}>
                <p>{text}</p>
            </div>
       </div>
     );
}

export default Feature;