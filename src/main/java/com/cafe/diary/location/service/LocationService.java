package com.cafe.diary.location.service;

import com.cafe.diary.location.domain.LocationApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@RequiredArgsConstructor
@Service
public class LocationService {

    private final WebClient webClient;

    @Value("${kakao.location-url}")
    private String locationUrl;

    @Value("${kakao.rest-api-key}")
    private String restApiKey;

    public LocationApiResponse getLocation(String query) {
        return webClient.get()
                .uri(locationUrl, query)
                .header(HttpHeaders.AUTHORIZATION, restApiKey)
                .retrieve()
                .bodyToMono(LocationApiResponse.class)
                .block();
    }
}
