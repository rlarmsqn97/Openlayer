package com.example.openlayer.user.vo;

import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.Transient;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Data
public class UserVO implements UserDetails {
    private int userNo;
    private String userId;
    private String userPw;
    private String userName;
    private String userRole;
    private String appendDate;
    private String updateDate;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(this.userRole));
    }

    @Override
    public String getPassword() {
        return this.userPw;
    }

    /**
     **  시큐리티의 userName -> 인증할 때 id를 봄
     **/
    @Override
    public String getUsername() {
        return this.userId;
    }

    // Vo의 userName !
    public String getUserName(){
        return this.userName;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
