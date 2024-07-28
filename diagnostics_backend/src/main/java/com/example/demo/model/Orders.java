package com.example.demo.model;



import java.util.List;


import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int order_id;
	@ElementCollection
	private List<String> products_code;
	private String payment;

	public List<String> getProducts_code() {
		return products_code;
	}
	public void setProducts_code(List<String> products_code) {
		this.products_code = products_code;
	}
	public int getOrder_id() {
		return order_id; 
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	
}
