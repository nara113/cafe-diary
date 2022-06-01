package com.cafe.diary.location.controller;

import com.cafe.diary.location.domain.LocationApiResponse;
import com.cafe.diary.location.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/location")
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/{query}")
    public LocationApiResponse getLocations(@PathVariable String query, @RequestParam Integer page) {

        return locationService.getLocation(query, page);
    }
}
