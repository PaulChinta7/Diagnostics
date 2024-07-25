package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;

@Repository
public interface CartDao extends JpaRepository<Cart, Integer> {
	

}
