import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import { getMembers, insertMember, updateMember, deleteMember } from "../../api/callmember";

const MemberManage = () => {
  const [members, setMembers] = useState([]);

  // state ของฟอร์ม
  const [formId, setFormId] = useState(null); // ถ้ามีค่า = โหมดแก้ไข
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const fetchMembers = async () => {
    try {
      const data = await getMembers();
      setMembers(data);
    } catch (err) {
      console.error("โหลดข้อมูลล้มเหลว:", err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // ส่งฟอร์ม (เพิ่ม / แก้ไข)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formId) {
        // UPDATE
        await updateMember(formId, { name, pass, email });
        alert("แก้ไขสำเร็จ!");
      } else {
        // INSERT
        await insertMember({ name, pass, email });
        alert("เพิ่มสมาชิกสำเร็จ!");
      }

      resetForm();
      fetchMembers();
    } catch (err) {
      console.error(err);
      alert("เกิดข้อผิดพลาด");
    }
  };

  // เตรียมข้อมูลลงฟอร์มเวลาแก้ไข
  const handleEdit = (member) => {
    setFormId(member.id);
    setName(member.name);
    setPass(member.pass);
    setEmail(member.email);
  };

  // ลบข้อมูล
  const handleDelete = async (id) => {
    if (!window.confirm("ยืนยันการลบ?")) return;
    try {
      await deleteMember(id);
      fetchMembers();
    } catch (err) {
      alert("ลบไม่สำเร็จ");
    }
  };

  // เคลียร์ฟอร์ม
  const resetForm = () => {
    setFormId(null);
    setName("");
    setPass("");
    setEmail("");
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">
                {formId ? "แก้ไขสมาชิก" : "เพิ่มสมาชิกใหม่"}
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-2">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit" variant="success" className="me-2">
                  {formId ? "Update" : "Insert"}
                </Button>

                {formId && (
                  <Button variant="secondary" onClick={resetForm}>
                    Cancel
                  </Button>
                )}
              </Form>
            </Card.Body>
          </Card>

          {/* TABLE */}
          <Card className="mt-3">
            <Card.Header>
              <Card.Title as="h5">Member List</Card.Title>
            </Card.Header>

            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Tools</th>
                  </tr>
                </thead>

                <tbody>
                  {members.map((member, index) => (
                    <tr key={member.id}>
                      <td>{index + 1}</td>
                      <td>{member.id}</td>
                      <td>{member.name}</td>
                      <td>{ "*".repeat(member.pass?.length || 6) }</td>
                      <td>{member.email}</td>

                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEdit(member)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(member.id)}
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
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MemberManage;
