package com.coderscampus.Week21.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coderscampus.Week21.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
