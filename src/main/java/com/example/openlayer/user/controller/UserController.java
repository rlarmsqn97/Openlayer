package com.example.openlayer.user.controller;

import com.example.openlayer.user.service.UserService;
import com.example.openlayer.user.vo.UserVO;
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
        log.info("role : {}", authentication.getPrincipal());
        return "admin/index";
    }

    @GetMapping("/access_denied")
    public String accessDenied() {
        return "user/access_denied";
    }

}
