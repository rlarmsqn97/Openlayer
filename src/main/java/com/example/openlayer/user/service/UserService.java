package com.example.openlayer.user.service;

import com.example.openlayer.user.dao.UserDAO;
import com.example.openlayer.user.vo.UserVO;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService implements UserDetailsService {

    SimpleDateFormat format = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);

    private final UserDAO userDAO;

    @Transactional
    public void joinUser(UserVO userVO){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userVO.setUserPw(passwordEncoder.encode(userVO.getPassword()));
        userVO.setUserRole("USER");
        userVO.setAppendDate(localTime);
        userVO.setUpdateDate(localTime);
        userDAO.saveUser(userVO);
    }

    @Override
    public UserVO loadUserByUsername(String userId) throws UsernameNotFoundException {
        //여기서 받은 유저 패스워드와 비교하여 로그인 인증
        UserVO userVO = userDAO.getUserAccount(userId);
        if (userVO == null){
            throw new UsernameNotFoundException("User not authorized.");
        }

        return userVO;
    }
}