import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navigasi from "./components/Navigasi";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  // Dijalankan ketika halaman di render
  useEffect(() => {
    retrieveData();
  }, []);

  //fungsi untuk menampilkan data dari database
  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        const book = response.data;
        setBooks(book);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //fungsi untuk menerima data dari child
  const storeData = (inputBook) => {
    // console.log(inputBook);
    // alert("Data berhasil disimpan");
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data berhasil disimpan");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const updateData = (inputBook) => {
    // console.log(inputBook);
    // alert("Data berhasil di ubah");
    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("Data berhasil di ubah");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deleteData = (book) => {
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then(() => {
        retrieveData();
        alert("Data berhasil di hapus");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
