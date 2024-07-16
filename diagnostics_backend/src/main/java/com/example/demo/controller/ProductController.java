package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductService productservice;
	
	@GetMapping("/getproducts")
	public List<Product> getProducts() {
		
		return productservice.getProducts(); 
	}
	@PostMapping("/addproduct")
	public String addProduct(@RequestBody Product obj) {
		
		return productservice.addProduct(obj); 
	}
	
}
