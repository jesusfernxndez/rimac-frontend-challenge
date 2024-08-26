import { IconTelephone } from "@/shared/icons";
import styles from "./styles.module.scss";
import { LogoRimac } from "@/shared/components";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <LogoRimac />
        <div className={styles.header__contact}>
          <span className={styles.header__contact__text}>
            ¡Compra por este medio!
          </span>
          <a className={styles.header__contact__phone} href="tel:+514116001">
            <IconTelephone />
            (01) 411 6001
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
