package com.demo.neo4j.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.neo4j.model.Company;

@RestController
public class CompanyData {
	
@PostMapping("/customer/save")
public String savingCustomer(@RequestBody Company company) throws Exception {
	try {
		return "customer saved";
	}catch(Exception e){
		throw new Exception(e.getMessage());
	}	
}
}
