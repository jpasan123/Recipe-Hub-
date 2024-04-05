package com.example.chefs.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChefResponse {
    private String userName;
    private String email;

    public ChefResponse(Long userId, String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}
