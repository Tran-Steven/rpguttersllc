import Image from "next/image";
import styles from "page.module.css";
import List from "./components/Listheader";
import Contact from "./components/Contactheader";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <header>
        <Contact />
        <List />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
