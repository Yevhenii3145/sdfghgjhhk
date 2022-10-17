import { NavLink, Outlet } from "react-router-dom";
import styles from './product-page.module.scss';

const getClassName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
}

export default function ProductPage() {
    return (
        <>
            <h1>Product Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet tempora, esse dicta provident at. Facere harum atque possimus praesentium omnis repudiandae natus, rem vitae, veritatis nisi ut temporibus laborum.</p>
            <ul className={styles.menu}>
                <li><NavLink to={"list"} className={getClassName}>List</NavLink></li>
                <li><NavLink to={"add"} className={getClassName}>Add</NavLink></li>
                <li><NavLink to={"search"} className={getClassName}>Search</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}
