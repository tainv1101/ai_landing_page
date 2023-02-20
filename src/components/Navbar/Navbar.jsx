import {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import classNames from 'classnames/bind';
import logo from '../../assets/logo.svg'
import style from './Navbar.module.scss'

const Menu = () => (
    <>
        <p><a href='#home' > Home </a></p>
        <p><a href='#wgpt' > What is GPT </a></p>
        <p><a href='#possibility' > Open Ai </a></p>
        <p><a href='#features' > Case Studies </a></p>
        <p><a href='#blog' > Library </a></p>
    </>
)

const sx = classNames.bind(style)
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false) 

    return ( 
        <div className = {sx('navbar')} >
            <div className = {sx('navbar__links')} >
                <div className={sx('navbar__links-logo')} >
                    <img src={logo} alt='logo' />
                </div>

                <div className={sx('navbar__links-container')} >
                   <Menu/>
                </div>
            </div>

            <div className={sx('navbar__sign')} >
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>

            <div className={sx('navbar__menu')}>
                {toggleMenu ? (
                    <RiCloseLine color='#fff' fontSize='28px' onClick={() => setToggleMenu(false)} />
                    ): 
                    <RiMenu3Line color='#fff' fontSize='28px'  onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className={sx('navbar__menu-container', 'scale-up-center')} >
                       <div className={sx('navbar__menu-container_links')}>
                            <Menu/>
                            <div className={sx('navbar__menu-container_links-sign')} >
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                       </div>
                    </div>
                )}
            </div>

        </div>
     );
}

export default Navbar;