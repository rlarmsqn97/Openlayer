package com.example.openlayer.user.dao;

import com.example.openlayer.user.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDAO {
     UserVO getUserAccount(String userId);
     void saveUser(UserVO vo);
}
