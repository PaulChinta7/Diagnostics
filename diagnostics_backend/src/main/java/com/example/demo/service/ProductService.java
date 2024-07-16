package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.ProductDao;
import com.example.demo.model.Product;



@Service
public class ProductService {
	@Autowired
	ProductDao productdao;
	public List<Product> getProducts() {
		return productdao.findAll();
	}
	public String addProduct(Product obj) {
		productdao.save(obj);
		return "success";
	}
	
	
}
