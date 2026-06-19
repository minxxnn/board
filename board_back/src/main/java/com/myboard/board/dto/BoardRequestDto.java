package com.myboard.board.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class BoardRequestDto {
    private Long id;
    private String userId;
    private String title;
    private String content;
}
