package com.cafe.diary.content.controller;

import com.cafe.diary.common.annotation.BindingResultAop;
import com.cafe.diary.content.domain.ContentForm;
import com.cafe.diary.content.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/content")
public class ContentController {

    private final ContentService contentService;

    @BindingResultAop
    @PostMapping
    public ResponseEntity saveContent(@Validated ContentForm form, BindingResult result) {
        System.out.println("content = " + form);
        contentService.save(form);
        return ResponseEntity.ok("ok");
    }
}
