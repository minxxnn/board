import { useEffect, useState } from "react";
import api from "../../api";
import Table from "react-bootstrap/Table";

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    api
      .get("/board")
      .then((res) => {
        console.log(res.data);
        setBoards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>게시글 목록</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>작성자</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => {
            return (
              <tr key={board.id}>
                <td>{board.id}</td>
                <td>{board.userId}</td>
                <td>{board.title}</td>
                <td>{new Date(board.createdAt).toLocaleString("ko-KR")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BoardList;