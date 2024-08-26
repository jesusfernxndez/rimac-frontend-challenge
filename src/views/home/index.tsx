import PrincipalImage from "@/assets/principal-content.png";
import Formulario from "./components/formulario";
import Presentation from "./components/presentation";
import styles from "./index.module.scss";

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home__image}>
        <img src={PrincipalImage} />
      </div>
      <div className={styles.home__content}>
        <Presentation />
        <Formulario />
      </div>
    </main>
  );
}

export default Home;
