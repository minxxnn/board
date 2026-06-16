package com.myboard.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CommentsDto {

    private Long id;
    private Long boardId;
    private String userId;
    private String content;
}
