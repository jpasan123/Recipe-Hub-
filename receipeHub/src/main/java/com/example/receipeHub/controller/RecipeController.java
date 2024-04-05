package com.example.receipeHub.controller;

import com.example.receipeHub.service.RecipeService;
import com.example.receipeHub.data.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping(path = "/recipes")
    public List<Recipe> getAllRecipes(){
      return recipeService.getAllRecipes();
    }

    @GetMapping(path = "/recipes/{id}")
    public Recipe getAllRecipes(@PathVariable Long id){
        return recipeService.getRecipeDetails(id);
    }

    @PostMapping(path = "/recipes")
    public String createARecipe(@RequestBody Recipe recipe){
        return recipeService.createARecipe(recipe);
    }
}
