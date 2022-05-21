package com.cafe.diary.content.mapper;

import com.cafe.diary.content.domain.UploadFile;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UploadFileMapper {
    void insert(UploadFile file);
}
