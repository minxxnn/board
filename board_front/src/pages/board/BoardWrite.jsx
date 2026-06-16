import { useState } from "react";
import api from "../../api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BoardWrite() {
  const [form, setForm] = useState({
    userId: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/board", form)
      .then((res) => {
        console.log(res.data);
        alert("게시글 작성 완료!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>게시글 작성</h1>
      <Form onSubmit={handleSubmit} className="mb-5 border rounded p-4">
        <Form.Group className="mb-3">
          <Form.Label>작성자</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            value={form.userId}
            onChange={handleChange}
            placeholder="작성자 입력"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="제목 입력"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="내용 입력"
            rows={5}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          작성하기
        </Button>
      </Form>
    </div>
  );
}

export default BoardWrite;