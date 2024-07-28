package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.OrderDao;
import com.example.demo.model.Orders;

@Service
public class OrderService {
	@Autowired
	OrderDao orderdao;

	public ResponseEntity<List<Orders>> getOrders() {
		return new ResponseEntity<List<Orders>>(orderdao.findAll(),HttpStatus.OK);
	}

	public ResponseEntity<Orders> getOrder(int id) {
		Orders order=orderdao.findById(id).get();
		return new ResponseEntity<Orders>(order,HttpStatus.OK); 
	}
	
	
	public ResponseEntity<String> createOrder() {
		try {
			Orders order=new Orders();
			order.setPayment("INCOMPLETE");
			orderdao.save(order);
			return new ResponseEntity<String>("Order created",HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<String>("Error creating order",HttpStatus.NOT_ACCEPTABLE);
		}
	}

	public ResponseEntity<Void> addItem(int id, String productcode) {
		if(orderdao.existsById(id)) {
			Orders order=orderdao.findById(id).get();
			order.getProducts_code().add(productcode);
			orderdao.save(order);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<Void> completePayment(int id) {
		if(orderdao.existsById(id)) {
			Orders order=orderdao.findById(id).get();
			order.setPayment("COMPLETE");
			orderdao.save(order);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}

	

	
	
	
}
