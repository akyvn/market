import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './navbar.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
export default function Navbar() {
    return <nav className={s.navbar + "  h-[100px] flex items-center px-[100px]"}>

        <a className={s.active}>خانه</a>
        <a>محصولات</a>
        <a>قوانین و مقررات</a>
        <a>درباره ما</a>
        <a className={s.cart}>
            <FontAwesomeIcon icon={faCartShopping} className='w-6'/>
        </a>
        <a className={`${s.contactus} bg-secondary text-white px-5 py-2 font-light`}>تماس با ما</a>

    </nav>
}