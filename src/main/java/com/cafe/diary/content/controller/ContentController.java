package com.cafe.diary.content.controller;

import com.cafe.diary.content.domain.Content;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    @PostMapping
    public void saveContent(Content content) {
        System.out.println("content = " + content);
    }
}
