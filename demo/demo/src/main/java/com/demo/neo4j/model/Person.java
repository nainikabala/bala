package com.demo.neo4j.model;

import java.util.Set;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import lombok.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NodeEntity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(exclude="entityId")
public class Person {
	
	@Id
	@GeneratedValue
	private long entityId;
	private String name;
	
	
	
}
