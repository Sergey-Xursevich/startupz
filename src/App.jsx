import Dialog from "./components/dialog/Dialog";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";

function App() {
  return (
    <div className="py-[30px] font-circular scroll-smooth">
      <Header />
      <Main />
      <Footer />
      <Dialog />
    </div>
  );
}

export default App;
