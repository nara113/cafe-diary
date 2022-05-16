package com.cafe.diary.content.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.type.Alias;
import org.hibernate.validator.constraints.Range;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@ToString
@Getter
@Setter
@Alias("contentForm")
public class ContentForm {

    @NotBlank(message = "카페 이름을 입력해주세요.")
    private String cafeName;

    @NotBlank(message = "카페 위치를 입력해주세요.")
    private String location;

    @NotNull(message = "카페 넓이를 선택해주세요.")
    private AreaType area;

    private boolean isPetAllowed;

    @NotNull(message = "평점을 선택해주세요.")
    @Range(min = 1, max = 5, message = "평점은 1점부터 5점까지 선택가능합니다.")
    private Integer rating;

    @NotBlank(message = "리뷰를 작성해 주세요.")
    private String review;

    private MultipartFile imageFile;
}
