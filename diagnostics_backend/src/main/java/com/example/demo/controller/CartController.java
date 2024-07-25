package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartService cartservice;
	@GetMapping("/getcart")
	public List<Cart> getCart() {
		return cartservice.getCart();
	}
	
	@PostMapping("/addcart")
	public String addCart(@RequestBody Cart cart) {
		return cartservice.addCart(cart); 
	}

}
