package com.example.receipeHub.service;

import com.example.receipeHub.data.Recipe;
import com.example.receipeHub.repo.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepo recipeRepo;

    public List<Recipe> getAllRecipes(){
        return recipeRepo.findAll();
    }

    public String createARecipe(Recipe recipe) {
        try {
            // Attempt to save the recipe to the repository
            Recipe savedRecipe = recipeRepo.save(recipe);

            if (savedRecipe != null) {
                // Recipe was successfully added
                return "Recipe added";
            } else {
                // The save method returned null, indicating a failure
                return "Recipe not added. Please check the data.";
            }
        } catch (Exception e) {
            // Handle any exceptions that may occur during the save process
            return "Error: " + e.getMessage();
        }
    }

    public Recipe getRecipeDetails(Long id){
        return recipeRepo.findById(id).get();
    }

}
