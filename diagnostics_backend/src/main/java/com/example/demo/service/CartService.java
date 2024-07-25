package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.CartDao;
import com.example.demo.model.Cart;

@Service
public class CartService {
	
	@Autowired
	CartDao cartdao;

	public List<Cart> getCart() {
		
		return cartdao.findAll();
	}

	public String addCart( Cart cart) {
		cartdao.save(cart);
		return "success";
	}
	
	
	
}
