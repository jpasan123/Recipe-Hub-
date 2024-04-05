package com.example.receipeHub.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table
@Data
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String recipeName;
    private Double recipeCost;
    private String recipeIngredients;
    @Lob // Use the @Lob annotation to specify a TEXT column
    @Column(name = "methodDescription", columnDefinition = "TEXT")
    private String methodDescription;
    private String youtubeVideoLink;
}
