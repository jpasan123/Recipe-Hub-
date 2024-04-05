package com.example.chefs.repo;

import com.example.chefs.data.Chef;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChefRepo extends JpaRepository<Chef, Long> {

    // Custom query methods can be defined here if needed.

    //User findByUsername(String username);

    Chef findByEmail(String email);

    // Other query methods...

}
