package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductService productservice;
	
	@GetMapping("/getproducts")
	public ResponseEntity<List<Product>> getProducts() {
		return productservice.getProducts(); 
	}
	@PostMapping("/addproduct")
	public ResponseEntity<String> addProduct(@RequestBody @Valid Product obj) {
		return productservice.addProduct(obj); 
	}
	@DeleteMapping("deleteproduct/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") int id){
		return productservice.deleteProduct(id); 
	}	
	@DeleteMapping("deleteproduct")
	public ResponseEntity<Void> deleteProductByCode(@RequestParam String code){
		return productservice.deleteProductByCode(code);
	}
	@PutMapping("/updateproduct/{id}")
	public ResponseEntity<Void> updateProduct(@PathVariable("id") int id,@RequestBody Product product){
		return productservice.updateProduct(id,product);
	}
	@PutMapping("/updateproduct")
	public ResponseEntity<Void> updateProductByCode(@RequestParam String code,@RequestBody Product product){
		return productservice.updateProductByCode(code,product);
	}
	
}
