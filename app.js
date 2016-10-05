
  // Nested object storing employee information
  
  var employee = {
	  name : "Rajesh Roy",
	  age : 30,
	  salary : "Rs10000",
	  address :{
		  city : "Kolkata",
		  state : "West Bengal",
		  pinCode : 700026
	  }
  }
  
  // Access object properties
  
  console.log(employee["name"]);
  console.log(employee["age"]);
  console.log(employee["salary"]);
  console.log(employee.address.city);
  console.log(employee.address.state);
  console.log(employee.address.pinCode);