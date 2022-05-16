package com.cafe.diary.content.service;

import com.cafe.diary.content.domain.ContentForm;
import com.cafe.diary.content.mapper.ContentMapper;
import com.cafe.diary.file.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Service
public class ContentService {
    private final ContentMapper contentMapper;
    private final FileService fileService;

    public void save(ContentForm form) {
        MultipartFile imageFile = form.getImageFile();
        if (imageFile != null && !imageFile.isEmpty()) {
            fileService.save(imageFile);
        }

        contentMapper.insert(form);
    }
}
