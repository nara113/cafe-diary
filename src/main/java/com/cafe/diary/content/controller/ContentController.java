package com.cafe.diary.content.controller;

import com.cafe.diary.content.domain.ContentForm;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    @PostMapping
    public ResponseEntity saveContent(@Validated ContentForm form, BindingResult result) {
        System.out.println("content = " + form);
        return ResponseEntity.ok("ok");
    }
}
