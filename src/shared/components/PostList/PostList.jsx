import styles from "./post-list.module.scss";
import { Link, useLocation } from "react-router-dom"

const PostList = ({ items }) => {
    const location = useLocation();
    const elements = items.map(({ id, title }, idex) => (<li key={idex} className={styles.item}>
        <Link state={{ from: location }} to={`/posts/${id}`}>{title}</Link>
    </li>));

    return <ul className={styles.list}>{elements}</ul>
}

export default PostList;

PostList.defaultProps = {
    items: []
}