console.log("*กำหนดตัวแปรเก็บข้อมูล");
let text = "Hello, world!"; 
let number = 42;            
let isActive = true;        

console.log("String:", text);
console.log("Integer:", number);
console.log("Boolean:", isActive);

//-------------------------------
console.log("*การแปลงชนิดข้อมูล");
// แปลง String เป็น Integer
let intValue = parseInt("10"); 

// แปลง String เป็น Float
let floatValue = parseFloat("3.14"); 

// แปลง Number เป็น String
let stringValue = String(100); 

console.log("Integer:", intValue, "Type:", typeof intValue);
console.log("Float:", floatValue, "Type:", typeof floatValue);
console.log("String:", stringValue, "Type:", typeof stringValue);


