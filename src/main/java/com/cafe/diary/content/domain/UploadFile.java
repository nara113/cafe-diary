package com.cafe.diary.content.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Builder
@Getter @Setter
public class UploadFile {
    private int contentId;

    private String fileName;

    private long fileSize;

    private String filePath;

    private String contentType;
}
