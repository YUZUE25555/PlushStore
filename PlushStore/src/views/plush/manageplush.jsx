import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Modal, Form } from "react-bootstrap";
import { getPlush, updatePlush, deletePlush } from "../../api/callplush";

const PlushManage = () => {
  const [plush, setPlush] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({ id_plush: "", name_plush:"", price:"", img_url:"" });

  const fetchPlush = async () => {
    try {
      const data = await getPlush();
      setPlush(data);
    } catch (err) {
      console.error("โหลดข้อมูล Plush ล้มเหลว:", err);
    }
  };

  useEffect(() => {
    fetchPlush();
  }, []);

  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  const handleSave = async () => {
    await updatePlush(editData.id_plush, editData);
    setShowModal(false);
    fetchPlush();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("ลบสินค้าชิ้นนี้?")) return;
    await deletePlush(id);
    fetchPlush();
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Plush Management</Card.Title>
          </Card.Header>

          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Img</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                {plush.map((item, index) => (
                  <tr key={item.id_plush}>
                    <td>{index + 1}</td>
                    <td>{item.id_plush}</td>
                    <td>{item.name_plush}</td>
                    <td>{item.price} ฿</td>
                    <td><img src={item.img_url} width="50" /></td>

                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(item.id_plush)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Modal Edit */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Plush</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={editData.name_plush}
                  onChange={(e) => setEditData({ ...editData, name_plush: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={editData.price}
                  onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  value={editData.img_url}
                  onChange={(e) => setEditData({ ...editData, img_url: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="success" onClick={handleSave}>Save</Button>
          </Modal.Footer>
        </Modal>

      </Col>
    </Row>
  );
};

export default PlushManage;
