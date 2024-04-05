package com.example.receipeHub.repo;

import com.example.receipeHub.data.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepo extends JpaRepository<Recipe, Long> {
    // You can add custom query methods here if needed
}
