package com.myboard.board.service;

import com.myboard.board.dto.BoardRequestDto;
import com.myboard.board.dto.BoardResponseDto;
import com.myboard.board.entity.Board;
import com.myboard.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    // 게시글 전체 조회
    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    // 게시글 상세 조회
    public BoardRequestDto getBoardById(Long id) {
        Board findBoardById = boardRepository.findById(id).orElse(null);
        if (findBoardById == null) {
            return null;
        } else {
            return BoardResponseDto.toDto(findBoardById);
        }
    }

    // 게시글 작성
    public void writeBoard(BoardRequestDto boardRequestDto) {
        Board board = new Board();
        board.setUserId(boardRequestDto.getUserId());
        board.setTitle(boardRequestDto.getTitle());
        board.setContent(boardRequestDto.getContent());
        boardRepository.save(board);
    }

    // 게시글 수정
    public BoardDto editBoard(Long id, BoardDto boardRequestDto) {
        Board board = boardRepository.findById(id).orElse(null);
        if (board == null) {
            return null;
        }
        board.setTitle(boardRequestDto.getTitle());
        board.setContent(boardRequestDto.getContent());
        boardRepository.save(board);
        return BoardDto.toDto(board);
    }

    // 게시글 삭제
    public boolean deleteBoard(Long id) {
        Board board = boardRepository.findById(id).orElse(null);
        if (board == null) {
            return false;
        }
        boardRepository.delete(board);
        return true;
    }
}
