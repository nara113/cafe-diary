package com.cafe.diary.location.domain;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
public class LocationApiResponse {
    private List<Document> documents;
}
