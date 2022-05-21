package com.cafe.diary.file.service;

import com.cafe.diary.content.domain.UploadFile;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.StringJoiner;

@Slf4j
@Component
public class FileService {

    private static final String DELIMITER = "/";

    @Value("${file.path}")
    private String filePath;

    public UploadFile save(int contentId, MultipartFile imageFile) {
        try {
            String fullPath = getFullPath(contentId, imageFile.getOriginalFilename());

            File file = new File(fullPath);

            FileUtils.deleteDirectory(file.getParentFile());
            FileUtils.createParentDirectories(file);

            imageFile.transferTo(file);

            return UploadFile.builder()
                    .contentId(contentId)
                    .fileName(imageFile.getOriginalFilename())
                    .fileSize(imageFile.getSize())
                    .contentType(imageFile.getContentType())
                    .filePath(fullPath)
                    .build();

        } catch (IOException e) {
            log.error("image file save error");
            throw new IllegalStateException(e);
        }
    }

    private String getFullPath(int contentId, String fileName) {
        return new StringJoiner(DELIMITER)
                .add(filePath)
                .add(Integer.toString(contentId))
                .add(fileName)
                .toString();
    }
}
