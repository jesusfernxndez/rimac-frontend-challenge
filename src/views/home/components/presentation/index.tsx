import PrincipalImage from "@/assets/principal-content.png";
import styles from "./styles.module.scss";

function Presentation() {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__title}>
        <div>
          <span>Seguro Salud Flexible</span>
          <h1>Creado para ti y tu familia</h1>
        </div>
        <img src={PrincipalImage} />
      </div>
      <div className={styles.presentation__separator} />
      <h5 className={styles.presentation__description}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </h5>
    </div>
  );
}

export default Presentation;
