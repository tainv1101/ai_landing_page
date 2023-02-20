import classNames from 'classnames/bind';
import style from './Blog.module.scss';
import {Artical} from '../../components';
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';

const sx = classNames.bind(style)
function Blog() {
    return ( 
        <div id='blog' className={sx('blog', 'section__padding')}>
            <div className={sx('blog__heading')}>
                <h1 className='gradient__text'>A lot is happening, 
                We are blogging about it.</h1>
            </div>
            <div className={sx('blog__container')}>
                <div className={sx('blog__container-left')}>
                    <Artical src={blog1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div className={sx('blog__container-right')}>
                <Artical src={blog2} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                <Artical src={blog3} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                <Artical src={blog4} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                <Artical src={blog5} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>
            
        </div>
     );
}

export default Blog;