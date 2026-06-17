package com.myboard.board.dto;

import com.myboard.board.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class BoardDto {

    private Long id;
    private String userId;
    private String title;
    private String content;

    // 게시글 상세 조회
    public static BoardDto toDto(Board board) {
        BoardDto result = new BoardDto();

        result.setId(board.getId());
        result.setUserId(board.getUserId());
        result.setTitle(board.getTitle());
        result.setContent(board.getContent());

        return result;
    }
}
