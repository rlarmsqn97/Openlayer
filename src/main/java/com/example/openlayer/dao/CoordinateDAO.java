package com.example.openlayer.dao;

import com.example.openlayer.vo.CoordinateVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CoordinateDAO {
    void coordinateInsert(CoordinateVO vo);
    List<CoordinateVO> getCoordinate();
    void polygonInsert(CoordinateVO vo);
    List<CoordinateVO> getPolygon();
}