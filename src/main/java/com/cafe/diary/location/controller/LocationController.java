package com.cafe.diary.location.controller;

import com.cafe.diary.location.domain.LocationApiResponse;
import com.cafe.diary.location.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/location")
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/{query}")
    public LocationApiResponse getLocations(@PathVariable String query) {
        return locationService.getLocation(query);
    }
}
