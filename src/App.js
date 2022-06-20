import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import contacts from "./data/contacts.json";
// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="containerContent">
        <Contact data={contacts} />
      </div>
    </div>
  );
};

export default App;
