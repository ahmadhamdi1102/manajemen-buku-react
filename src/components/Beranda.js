import React from "react";
import { Container, Table } from "react-bootstrap";

function Beranda({ bookList }) {
  return (
    <div className="container mt-3 w-75 text-center">
      <Container>
        <h1> Selamat datang di toko buku Camp404 </h1>
        <div id="katalogBuku">
          <h4 className="text-center mt-3">Katalog Buku</h4>
          <hr />
          <Table striped bordered hover variant="info" className="mt-3">
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.judul}</td>
                  <td>{book.pengarang}</td>
                  <td>{book.harga}</td>
                  <td>{book.stok}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Beranda;
