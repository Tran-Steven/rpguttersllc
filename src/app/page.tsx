import Image from "next/image";
import styles from "page.module.css";
import List from "components/listheader";
import Contact from "components/contactheader";
import Main from "components/main";
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
