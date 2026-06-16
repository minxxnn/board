import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BoardEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    api
      .get(`/board/${id}`)
      .then((res) => {
        setForm({
          title: res.data.title,
          content: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .put(`/board/${id}`, form)
      .then(() => {
        alert("수정 완료!");
        navigate(`/board/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <h1>게시글 수정</h1>
      <Form onSubmit={handleSubmit} className="mb-5 border rounded p-4">
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={5}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          수정완료
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => navigate(`/board/${id}`)}>
          취소
        </Button>
      </Form>
    </div>
  );
}

export default BoardEdit;