import classNames from 'classnames/bind';
import { Feature } from '../../components';
import style from './WhatGPT.module.scss'

const sx = classNames.bind(style)
function WhatGPT() {
    return ( 
            <div id='whpt3' className={sx('about', 'section__margin', 'gradient__bg')}>
               <div className={sx('about__feature')}>
                <Feature title='What is GPT-3' 
                text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' 
                row />
               </div>
    
               <div className={sx('about__heading')}>
                    <h1 className={sx('gradient__text')}>The possibilities are beyond your imagination</h1>
                    <p>Explore The Library</p>
               </div>
    
               <div className={sx('about__container')}>
               <div className={sx('about_container-item')}>
                     <Feature 
                         title='Chatbots' 
                         text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' 
                         column
                         />
               </div>
               <div className={sx('about_container-item')}>
                     <Feature 
                         title='Knowledgebase' 
                         text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                         column
                     />
               </div>
                <div className={sx('about_container-item')}>
                     <Feature 
                         title='Education'
                         text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                         column
                    />
                </div>
               </div>
            </div>
     );
}

export default WhatGPT;