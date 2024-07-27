package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.ProductDao;
import com.example.demo.model.Product;

import jakarta.transaction.Transactional;



@Service
public class ProductService {
	@Autowired
	ProductDao productdao;
	public ResponseEntity<List<Product>> getProducts() {
		return new ResponseEntity<List<Product>>(productdao.findAll(),HttpStatus.OK) ;
	}
	public ResponseEntity<String> addProduct(Product obj) {
		productdao.save(obj);
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}
	public ResponseEntity<String> deleteProduct(int id) {
			if(productdao.existsById(id)) {
				productdao.deleteById(id);
				return new ResponseEntity<String>("deleted succesfully",HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<String>("No id found",HttpStatus.NOT_FOUND);
			}
		
		
	}
	
	public ResponseEntity<Void> updateProduct(int id,Product product) {
		if(productdao.existsById(id)) {
			Product existing_product =productdao.findById(id).get();
			existing_product.setName(product.getName());
			existing_product.setNo(product.getNo());
			existing_product.setDescription(product.getDescription());
			existing_product.setSummary(product.getSummary());
			existing_product.setType(product.getType());
			existing_product.setLocation(product.getLocation());
			existing_product.setReportsin(product.getReportsin());
			existing_product.setPrice(product.getPrice());
			productdao.save(existing_product);
			return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		}
		else {
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}
		
		
	}
	
	@Transactional
	public ResponseEntity<Void> deleteProductByCode(String code) {
		if(productdao.existsByCode(code)) {
			productdao.deleteByCode(code);
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity<Void> updateProductByCode(String code,Product product) {
		if(productdao.existsByCode(code)) {
			Product existing_product =productdao.findByCode(code).get();
			existing_product.setName(product.getName());
			existing_product.setNo(product.getNo());
			existing_product.setDescription(product.getDescription());
			existing_product.setSummary(product.getSummary());
			existing_product.setType(product.getType());
			existing_product.setLocation(product.getLocation());
			existing_product.setReportsin(product.getReportsin());
			existing_product.setPrice(product.getPrice());
			productdao.save(existing_product);
			return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		}
		else {
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}
	} 
	
	
}
