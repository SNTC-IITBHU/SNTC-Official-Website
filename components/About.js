import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div class={styles.ocean}>
        <div class={styles.wave}></div>
      </div>
      <div class={styles.container}>
        <div class={styles.text}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem quae voluptatibus quibusdam voluptatum
            quos quas quidem quae voluptatibus quibusdam voluptatum quos quas
            </p>
          </div>
      </div>
    </>
  );
};

export default About;