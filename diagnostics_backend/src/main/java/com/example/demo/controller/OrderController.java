package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;

@RestController
@RequestMapping("orders")
public class OrderController {

	@GetMapping("getorders")
	public void getOrders(@RequestParam String param) {
//	   get all the orders from the database for a particilar user.
		return ;
	}
	@PostMapping("addOrder")
	public void addOrders() {
//		add new order from all the items in cart after paying.
		return ;
	}
	
}
