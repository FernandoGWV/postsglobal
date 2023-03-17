import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className="container">
      <nav className={styles.mainContainer}>
        <div className={styles.flex}>
          <h1 className={styles.title}>Posts Global</h1>
          <ul className={styles.listen}>
            <li>
              <Link className={styles.a} href={"/"}>
                home
              </Link>
            </li>
            <li>
              <Link className={styles.a} href={"/posts/"}>
                meus posts
              </Link>
            </li>
            <li>
              <Link className={styles.a} href={"/posts/criar"}>
                criar posts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <Link className={styles.signup} href={"/login/"}>
              Login/Registra-se
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
