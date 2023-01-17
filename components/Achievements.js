import styles from "../styles/Achievements.module.css";

const Achievements = () => {
  return (
    <>
      <div class={styles.ocean}>
        <div class={styles.wave}></div>
      </div>
      <div class={styles.container}>
        <div class={styles.text}>
          <img src="/Achievements.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Achievements