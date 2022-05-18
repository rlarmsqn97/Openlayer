package com.example.openlayer.dao;

import com.example.openlayer.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDAO {
     UserVO getUserAccount(String userId);
     void saveUser(UserVO vo);
}
