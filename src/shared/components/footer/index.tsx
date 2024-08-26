import { LogoRimac } from "@/shared/components";
import { useMediaQuery } from "@/shared/hooks";
import styles from "./styles.module.scss";

function Footer() {
  const { isMobile } = useMediaQuery();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <LogoRimac variant={isMobile ? "white-horizontal" : "white"} />
        <div className={styles.footer__content__separate} />
        <span className={styles.footer__content__copy}>
          © 2023 RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
