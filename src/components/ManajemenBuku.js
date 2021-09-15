import React, { useState } from "react";
import { Container, Button, Table, Row, Col, Form } from "react-bootstrap";

function ManajemenBuku({ bookList, store, update, remove }) {
  //state
  const [inputBook, setInputBook] = useState();
  const [form, setForm] = useState();

  //fungsi untuk menghandle input dari form
  //...inputBook => Itu namanya spread operator, gunanya untuk concat nilai sebelum nya dengan nilai yang baru, agar nilai lama tidak hilang (muhfaridzia)
  const handleJudul = (e) => {
    setInputBook({ ...inputBook, judul: e.target.value });
  };
  const handlePengarang = (e) => {
    setInputBook({ ...inputBook, pengarang: e.target.value });
  };
  const handleHarga = (e) => {
    setInputBook({ ...inputBook, harga: e.target.value });
  };
  const handleStok = (e) => {
    setInputBook({ ...inputBook, stok: e.target.value });
  };

  //fungsi untuk menambah data
  const submitAdd = (e) => {
    e.preventDefault();
    store(inputBook);
    setForm("");
  };
  //fungsi untuk update data
  const submitChange = (e) => {
    e.preventDefault();
    update(inputBook);
    setForm("");
  };
  //fungsi untuk menghapus data
  const deleteBook = (book) => {
    remove(book);
  };

  //fungsi untuk menampilkan form
  const showCreate = () => {
    setForm("create");
  };
  const showEdit = (book) => {
    setInputBook(book);
    setForm("edit");
  };

  return (
    <>
      <Container>
        {/* Awal Form Tambah */}
        {form === "create" && (
          <div id="formTambah" className="mt-3">
            <form onSubmit={submitAdd}>
              <Row>
                <Col md={3}>
                  <Form.Control
                    type="text"
                    placeholder="Judul"
                    onChange={handleJudul}
                  />
                </Col>

                <Col md={3}>
                  <Form.Control
                    type="text"
                    placeholder="Pengarang"
                    onChange={handlePengarang}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="text"
                    placeholder="Harga"
                    onChange={handleHarga}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="text"
                    placeholder="Stok"
                    onChange={handleStok}
                  />
                </Col>
                <Col md={2}>
                  <Button variant="primary" type="submit">
                    Simpan
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        )}
        {/* Akhir Form Tambah */}

        {/* Form Ubah */}
        {form === "edit" && (
          <div id="formUbah" className="mt-3">
            <form onSubmit={submitChange}>
              <Row>
                <Col md={3}>
                  <Form.Control
                    type="text"
                    placeholder="Judul"
                    onChange={handleJudul}
                    value={inputBook.judul}
                  />
                </Col>

                <Col md={3}>
                  <Form.Control
                    type="text"
                    placeholder="Pengarang"
                    onChange={handlePengarang}
                    value={inputBook.pengarang}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="text"
                    placeholder="Harga"
                    onChange={handleHarga}
                    value={inputBook.harga}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="text"
                    placeholder="Stok"
                    onChange={handleStok}
                    value={inputBook.stok}
                  />
                </Col>
                <Col md={2}>
                  <Button variant="primary" type="submit">
                    Simpan
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        )}
        {/* Akhir Form Ubah */}

        <div id="daftarBuku">
          <h4 className="text-center mt-3">Daftar Buku</h4>
          <hr />
          <Button variant="primary" onClick={showCreate}>
            Tambah Buku
          </Button>
          <Table striped bordered hover variant="info" className="mt-3">
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
                <th>Aksi</th>
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
                  <td className="text-center">
                    {/* Agar bisa input parameter gunakan arrow function */}
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => showEdit(book)}
                    >
                      Ubah
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteBook(book)}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}

export default ManajemenBuku;
