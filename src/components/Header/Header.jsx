import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.header__logo}>
        Podcaster
      </Link>
    </header>
  );
};

export default Header;
