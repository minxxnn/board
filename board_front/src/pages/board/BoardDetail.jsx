import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";
import Button from "react-bootstrap/Button";

function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    api
      .get(`/board/${id}`)
      .then((res) => {
        console.log(res.data);
        setBoard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    api
      .delete(`/board/${id}`)
      .then(() => {
        alert("삭제 완료!");
        navigate("/board");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!board) return <div>로딩중...</div>;

  return (
    <div className="p-4">
      <h1>{board.title}</h1>
      <p>작성자: {board.userId}</p>
      <p>작성일: {new Date(board.createdAt).toLocaleString("ko-KR")}</p>
      <hr />
      <p>{board.content}</p>
      <Button variant="secondary" onClick={() => navigate(`/board/${id}/edit`)}>
        수정
      </Button>{" "}
      <Button variant="danger" onClick={handleDelete}>
        삭제
      </Button>{" "}
      <Button variant="outline-secondary" onClick={() => navigate("/board")}>
        목록으로
      </Button>
    </div>
  );
}

export default BoardDetail;