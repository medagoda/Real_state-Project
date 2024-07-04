package com.RealState.demo.Services;

import com.RealState.demo.Dto.LoginDto;
import com.RealState.demo.Dto.UserDto;
import com.RealState.demo.Entity.User;
import com.RealState.demo.Response.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface UserService {


    String addUser(UserDto userDto);

    LoginResponse loginUser(LoginDto loginDto);
}
