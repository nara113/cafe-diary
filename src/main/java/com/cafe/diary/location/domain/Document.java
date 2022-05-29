package com.cafe.diary.location.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class Document {
    @JsonProperty("address_name")
    private String addressName;

    @JsonProperty("place_name")
    private String placeName;

    @JsonProperty("road_address_name")
    private String roadAddressName;

    private String x;

    private String y;
}
