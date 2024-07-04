package com.RealState.demo.Services;

import com.RealState.demo.Dto.LoginDto;
import com.RealState.demo.Dto.UserDto;
import com.RealState.demo.Entity.User;
import com.RealState.demo.Response.LoginResponse;
import com.RealState.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceimpl implements UserService {



    @Autowired
    private UserRepository userRepository;

    public UserServiceimpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public String addUser(UserDto userDto) {

        User user = new User(userDto.getUserName(), userDto.getPassword(), userDto.getConfirmPassword(), userDto.getEmail());
        userRepository.save(user);

        return user.getUserName();
    }

    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String msg = "";

        User user1 = userRepository.findByEmail(loginDto.getEmail());

        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();

            Boolean isPwdright = password.matches(encodedPassword);

            if (isPwdright){
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
                if (user.isPresent()){
                    return new LoginResponse("Login success",true);
                }
                else {
                    return new LoginResponse("Login failed",false);
                }
            }
            else {
                return new LoginResponse("Password not match", false);
            }
        }
        else {
            return new LoginResponse("Incorrect Password and Email",false);
        }

    }

}