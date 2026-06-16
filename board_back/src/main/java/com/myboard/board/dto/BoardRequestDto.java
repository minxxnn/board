package com.myboard.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class BoardRequestDto {
    private Long id;
    private String userId;
    private String title;
    private String content;
}
