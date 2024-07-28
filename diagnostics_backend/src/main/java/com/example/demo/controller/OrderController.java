package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Orders;
import com.example.demo.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	OrderService orderservice;
	
	@GetMapping("/getorders")
	public ResponseEntity<List<Orders>> getOrders(){
		return orderservice.getOrders();
	}
//	Handle OrderNotFound Exception
	@GetMapping(value="/getorders",params="id")
	public ResponseEntity<Orders> getOrder(@RequestParam int id){
		return orderservice.getOrder(id);
		
	}
	
	
	
	@PostMapping("/createorder")
	public ResponseEntity<String> createOrder(){
		return orderservice.createOrder(); 
	}
	
	@PostMapping(value="/additem")
	public ResponseEntity<Void> addItem(@RequestParam int id, @RequestParam String productcode){
		return orderservice.addItem(id,productcode);
	}
	
	
	@PostMapping("/payment")
	public ResponseEntity<Void> completePayment(@RequestParam int id){
		return orderservice.completePayment(id);
	}
	
	
	
	
}
