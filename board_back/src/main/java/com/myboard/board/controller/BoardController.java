package com.myboard.board.controller;

import com.myboard.board.dto.BoardRequestDto;
import com.myboard.board.dto.BoardResponseDto;
import com.myboard.board.entity.Board;
import com.myboard.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @Controller
// @ResponseBody
@RestController
@RequiredArgsConstructor
@RequestMapping("api/board")
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {
    private final BoardService boardService;

    // 게시글 전체 조회
    @GetMapping()
    public List<Board> getAllBoards() {
        return boardService.getAllBoards();
    }

    // 게시글 상세 조회
    @GetMapping("/{id}")
    public BoardResponseDto getBoardById(@PathVariable Long id) {
        System.out.println(id);
        return boardService.getBoardById(id);
    }

    // 게시글 작성
    @PostMapping()
    public String writeBoard(@RequestBody BoardRequestDto boardRequestDto) {
        System.out.println(boardRequestDto);
        boardService.writeBoard(boardRequestDto);
        return "게시글이 작성되었습니다.";
    }

    // 게시글 수정
    @PutMapping("/{id}")
    public ResponseEntity<BoardDto> editBoard(@PathVariable Long id,
                                                      @RequestBody BoardDto boardRequestDto) {
        BoardDto result = boardService.editBoard(id, boardRequestDto);
        if (result == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(result);
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBoard(@PathVariable Long id) {
        System.out.println("삭제 요청 들어옴! id: " + id);
        boolean result = boardService.deleteBoard(id);
        System.out.println("삭제 결과: " + result);
        if (!result) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok("게시글이 삭제되었습니다.");
    }
}
