package com.cafe.diary.content.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@ToString
@Getter @Setter
public class Content {
    private String cafeName;
    private String location;
    private String area;
    private boolean isPetAllowed;
    private int rating;
    private String review;
    private MultipartFile image;
}
