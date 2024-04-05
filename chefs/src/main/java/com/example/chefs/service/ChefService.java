package com.example.chefs.service;

import com.example.chefs.data.Chef;
import com.example.chefs.repo.ChefRepo;
import com.example.chefs.response.ChefResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChefService {

    @Autowired
    private ChefRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public ChefResponse getUserById(Long id) {
        ChefResponse userResponse = new ChefResponse();
        Optional<Chef> userOptional = userRepo.findById(id);

        if (userOptional.isPresent()) {
            Chef user = userOptional.get();
            userResponse.setUserName(user.getUsername());
            userResponse.setEmail(user.getEmail());
        }

        return userResponse;
    }


    public String createUser(Chef user) {
        Chef existingUser = userRepo.findByEmail(user.getEmail());//check email availability
        if (existingUser != null) {
            return "Email Exist";
        } else {
            user.setPassword(hashPassword(user.getPassword()));//hashing
            userRepo.save(user);
            return "Registered";
        }
    }

    public Long validateLogin(String email, String password) {
        Chef user = userRepo.findByEmail(email);

        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return user.getId();
        } else {
            return 0L;
        }
    }

    private String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }

    // Other CRUD operations (update and delete) can be added as needed.
}
