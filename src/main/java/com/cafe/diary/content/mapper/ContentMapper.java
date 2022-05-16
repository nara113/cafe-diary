package com.cafe.diary.content.mapper;

import com.cafe.diary.content.domain.ContentForm;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ContentMapper {
    void insert(ContentForm form);
}
