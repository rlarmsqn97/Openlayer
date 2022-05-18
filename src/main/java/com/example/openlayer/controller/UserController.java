package com.example.openlayer.controller;

import com.example.openlayer.service.UserService;
import com.example.openlayer.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;


@Controller
@Slf4j
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/user_access")
    public String login(UserVO vo, Model model, Authentication authentication, HttpServletRequest request) {
        log.info("request : {}",request);
        return "index";
    }

    @GetMapping("/access_denied")
    public String accessDenied() {
        return "user/access_denied";
    }

}
