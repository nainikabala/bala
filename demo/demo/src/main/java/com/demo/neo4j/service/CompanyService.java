package com.demo.neo4j.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.neo4j.model.Company;
import com.demo.neo4j.repository.CompanyRepository;

@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public List<Company> getCompanies() {
	    try {
	        return (List<Company>) companyRepository.findAll();
	    } catch (Exception e) {
	        System.err.println("Error fetching companies: " + e.getMessage());
	        return Collections.emptyList();
	    }
	}
	
	public Company saveCompany(Company company) {
	    try {
	        return companyRepository.save(company);
	    } catch (Exception e) {
	        System.err.println("Error saving company: " + e.getMessage());
	        return null;
	    }
	}

	public Company getCompanyById(Long id) {
	    try {
	        return companyRepository.findById(id).orElse(null);
	    } catch (Exception e) {
	        System.err.println("Error fetching company by ID: " + e.getMessage());
	        return null;
	    }
	}

	public Company updateCompany(Long id, Company company) {
	    try {
	        Optional<Company> companyOpt = companyRepository.findById(id);
	        if (companyOpt.isPresent()) {
	            Company companyEntity = companyOpt.get();
	            // Update fields here
	            return companyRepository.save(companyEntity);
	        } else {
	            System.err.println("Company not found with ID: " + id);
	            return null;
	        }
	    } catch (Exception e) {
	        System.err.println("Error updating company: " + e.getMessage());
	        return null;
	    }
	}

	public void deleteCompany(Long id) {
	    try {
	        companyRepository.deleteById(id);
	    } catch (Exception e) {
	        System.err.println("Error deleting company: " + e.getMessage());
	    }
	}
}
	



