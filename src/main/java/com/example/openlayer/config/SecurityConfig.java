package com.example.openlayer.config;

import com.example.openlayer.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserService userService;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/static/js/**", "/static/css/**");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers( "/","/login","/signup").permitAll()
                .antMatchers("/admin/**").hasRole("ADMIN")
                .and()
                .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/login")
                .defaultSuccessUrl("/user_access")
                .failureUrl("/access_denied") // 인증에 실패했을 때 보여주는 화면 url, 로그인 form으로 파라미터값 error=true로 보낸다.
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true).deleteCookies("JSESSIONID")
                .and()
                .csrf().disable();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(new BCryptPasswordEncoder());
    }
}