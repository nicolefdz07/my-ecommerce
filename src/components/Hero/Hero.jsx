import styles from "./HomePage.module.css";
export default function Hero() {
  return (
    <article className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <img
          src="https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className={styles.heroText}>
        <h1>
          Simple is
          <br />
          more
        </h1>
      </div>
    </article>
  );
}
