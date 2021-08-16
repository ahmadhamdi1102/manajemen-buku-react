import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navigasi from "./components/Navigasi";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [books] = useState([
    {
      _id: 1,
      judul: "Laskar Pelangi",
      pengarang: "Andrea Hirata",
      harga: 85000,
      stok: 7,
    },
    { _id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 75000, stok: 15 },
  ]);

  //fungsi untuk menerima data dari child
  const storeData = (inputBook) => {
    console.log(inputBook);
    alert("Data berhasil disimpan");
  };

  const updateData = (inputBook) => {
    console.log(inputBook);
    alert("Data berhasil di ubah");
  };

  const deleteData = (book) => {
    alert("Data berhasil di hapus");
  };

  return (
    <div className="App">
      <Router>
        <Navigasi />
        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>
          <Route path="/manajemen-buku">
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
