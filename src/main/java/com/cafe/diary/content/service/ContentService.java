package com.cafe.diary.content.service;

import com.cafe.diary.content.domain.ContentForm;
import com.cafe.diary.content.domain.UploadFile;
import com.cafe.diary.content.mapper.ContentMapper;
import com.cafe.diary.content.mapper.UploadFileMapper;
import com.cafe.diary.file.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Service
public class ContentService {
    private final ContentMapper contentMapper;
    private final FileService fileService;
    private final UploadFileMapper uploadFileMapper;

    @Transactional
    public ContentForm save(ContentForm form) {
        contentMapper.insert(form);

        MultipartFile imageFile = form.getImageFile();

        if (imageFile != null && !imageFile.isEmpty()) {
            UploadFile uploadFile = fileService.save(form.getContentId(), imageFile);

            uploadFile.setContentId(form.getContentId());

            uploadFileMapper.insert(uploadFile);
        }

        return form;
    }
}
