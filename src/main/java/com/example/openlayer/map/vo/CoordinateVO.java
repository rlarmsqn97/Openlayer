package com.example.openlayer.map.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CoordinateVO {
    private Double lon;
    private Double lat;
    private String geom;
    private String polygonCoordinate;
}