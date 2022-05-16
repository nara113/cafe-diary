package com.cafe.diary.file.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Slf4j
@Component
public class FileService {

    @Value("${file.path}")
    private String filePath;

    public void save(MultipartFile imageFile) {

    }
}
