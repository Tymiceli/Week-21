package com.coderscampus.Week21.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coderscampus.Week21.domain.User;
import com.coderscampus.Week21.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save (User user){
        return userRepository.save(user);
    }
}
