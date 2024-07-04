package com.RealState.demo.controller;


import com.RealState.demo.Dto.LoginDto;
import com.RealState.demo.Dto.UserDto;
import com.RealState.demo.Response.LoginResponse;
import com.RealState.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/users/")
public class Usercontroller{

           @Autowired
           private UserService userService;

           @PostMapping("/save")
          public String saveUser(@RequestBody UserDto userDto){
               String userName = userService.addUser(userDto);
               return userName;
           }

           @GetMapping("/login")
          public String getDetails(){
               return "amesh";
           }

           @PostMapping("/login")
          public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto){
               LoginResponse loginResponse = userService.loginUser(loginDto);
               return ResponseEntity.ok(loginResponse);
           }

}
