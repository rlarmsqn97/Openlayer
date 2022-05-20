package com.example.openlayer.map.dao;

import com.example.openlayer.map.vo.CoordinateVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CoordinateDAO {
    void coordinateInsert(List<CoordinateVO> vo);
    List<CoordinateVO> getCoordinate();
    void polygonInsert(CoordinateVO vo);
    List<CoordinateVO> getPolygon();
}