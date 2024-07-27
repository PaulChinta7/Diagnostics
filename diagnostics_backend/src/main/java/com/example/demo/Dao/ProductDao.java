package com.example.demo.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Product;

@Repository 
public interface ProductDao extends JpaRepository<Product,Integer> {
	@Query("Select COUNT(p) > 0  from Product p where p.no=:code")
	boolean existsByCode(String code);
	
	@Modifying
	@Query("Delete from Product p where p.no=:code")
	void deleteByCode(String code);
	
	@Query("Select p from Product p where p.no=:code")
	Optional<Product> findByCode(String code);

}
