package com.example.chefs.controller;
import com.example.chefs.data.Chef;
import com.example.chefs.response.ChefResponse;
import com.example.chefs.service.ChefService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/chefs")
@CrossOrigin
public class ChefController {

    @Autowired
    private ChefService userService;

    @GetMapping(path = "/{id}")
    public ChefResponse getUserById(@PathVariable  Long id){
        return userService.getUserById(id);
    }

    @PostMapping
    public String createUser(@RequestBody Chef user) {
        return userService.createUser(user);
    }

    @PostMapping("/login")
    public Long loginUser(@RequestBody Chef user) {
        return userService.validateLogin(user.getEmail(), user.getPassword());
    }

}
