import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { insertPlush } from "../../api/callplush";

const InsertPlush = () => {
  const [form, setForm] = useState({ name_plush:"", price:"", img_url:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertPlush(form);
    alert("เพิ่ม Plush สำเร็จแล้ว");
    setForm({ name_plush:"", price:"", img_url:"" });
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title>Add Plush</Card.Title>
          </Card.Header>

          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={form.name_plush}
                  onChange={(e) => setForm({ ...form, name_plush: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  value={form.img_url}
                  onChange={(e) => setForm({ ...form, img_url: e.target.value })}
                />
              </Form.Group>

              <Button className="mt-3" variant="success" type="submit">Insert</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InsertPlush;
