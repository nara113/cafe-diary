package com.cafe.diary.location.service;

import com.cafe.diary.location.domain.LocationApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@Service
public class LocationService {

    private final WebClient webClient;

    @Value("${kakao.location-url}")
    private String locationUrl;

    @Value("${kakao.rest-api-key}")
    private String restApiKey;

    public LocationApiResponse getLocation(String query, Integer page) {
        return webClient.get()
                .uri(locationUrl, page, query)
                .header(HttpHeaders.AUTHORIZATION, restApiKey)
                .retrieve()
                .onStatus(HttpStatus::isError, response -> Mono.error(new IllegalStateException("location api request failed")))
                .bodyToMono(LocationApiResponse.class)
                .block();
    }
}
