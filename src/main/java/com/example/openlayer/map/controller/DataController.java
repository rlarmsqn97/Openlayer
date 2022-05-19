package com.example.openlayer.map.controller;

import com.example.openlayer.map.service.CoordinateService;
import com.example.openlayer.map.vo.CoordinateVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class DataController {
    private final CoordinateService coordinateService;

    @PostMapping("/coordinate")
    public void insertCoordinate(@RequestBody CoordinateVO vo) {
        log.info("vo : {}", vo.getLat());
        coordinateService.insertCoordinate(vo);
    }

    @GetMapping("/getcoordinate")
    public List<CoordinateVO> getCoordinate(){
        return coordinateService.getCoordinate();
    }

    @PostMapping("/polygoncoordinate")
    public void insertPolygon(@RequestBody CoordinateVO vo) {
        log.info("vo : {}", vo.getPolygonCoordinate());
        coordinateService.insertPolygon(vo);
    }

    @GetMapping("/getPolygon")
    public List<CoordinateVO> getPolygon() {
        log.info("polygon : {}", coordinateService.getPolygon().get(0).getPolygonCoordinate());
        return coordinateService.getPolygon();
    }
}
