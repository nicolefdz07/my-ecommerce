import Hero from "../components/Hero/Hero.jsx";
import styles from "../components/Hero/HomePage.module.css";
import Products from "../components/products/Products.jsx";
export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Hero />
      {/* <ProductsSection  and sidebar/> */}
      <section className={styles.ProductsSection}>
        <aside className={styles.filtersSideBar}>
        {/* filtros */}
        
        <div>FILTROS</div>
        </aside>

        <main className={styles.productsArea}>
          <Products />
          <div>PRODUCTOS</div>
        </main>
      </section>
    </div>
  );
}
