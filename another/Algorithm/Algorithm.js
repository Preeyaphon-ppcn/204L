//ช้อ3---------
function changeBackground() {
    const colors = ["#f8c291", "#6a89cc", "#82ccdd", "#b8e994", "#f7d794"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("messageBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Hello, you clicked the button!";
});

document.getElementById("hoverInput").onmouseover = function() {
    document.getElementById("hoverMessage").innerText = "You hovered over the input!";
};

document.getElementById("hoverInput").onkeyup = function() {
    document.getElementById("hoverMessage").innerText = "Typing: " + this.value;
};


function validateForm() {
    let email = document.getElementById("email").value;
    let errorMessage = document.getElementById("error");
    
    if (!email.includes("@") || !email.endsWith(".com")) {
        errorMessage.innerText = "Invalid email format. Must contain '@' and end with '.com'";
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

function calculateArea() {
    let radius = document.getElementById("radius").value;
    let resultElement = document.getElementById("result-circle");
    
    if (radius === "" || radius <= 0) {
        resultElement.innerText = "Please enter a valid radius.";
        return;
    }
    
    let area = Math.PI * Math.pow(radius, 2);
    resultElement.innerText = `The area of the circle is: ${area.toFixed(2)}`;
}

function checkAge() {
    let value = document.getElementById("inputValue").value;
    let resultElement = document.getElementById("result-age");
    
    if (value === "" || value < 0) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }
    
    if (value <= 12) {
        resultElement.innerText = "You are a Child.";
    } else if (value <= 19) {
        resultElement.innerText = "You are a Teenager.";
    } else {
        resultElement.innerText = "You are an Adult.";
    }
}

function checkEvenOdd() {
    let value = document.getElementById("inputValue").value;
    let resultElement = document.getElementById("result-age");
    
    if (value === "") {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }
    
    if (value % 2 === 0) {
        resultElement.innerText = "The number is Even.";
    } else {
        resultElement.innerText = "The number is Odd.";
    }
}

function showNumbers() {
    let num = parseInt(document.getElementById("numberInput").value);
    let numbersDiv = document.getElementById("numbers");
    numbersDiv.innerHTML = ""; // เคลียร์ค่าก่อนหน้า

    if (isNaN(num) || num < 1 || num > 10) {
        numbersDiv.innerHTML = "<span style='color:red;'>กรุณากรอกตัวเลขระหว่าง 1-10</span>";
        return;
    }

    for (let i = 1; i <= num; i++) {
        numbersDiv.innerHTML += i + " ";
    }
}

// While Loop: รับค่าจากผู้ใช้ไปเรื่อย ๆ จนกว่าจะพิมพ์ "exit"
function checkInput() {
    let outputDiv = document.getElementById("output");
    let inputField = document.getElementById("userInput");

    while (true) {
        let value = inputField.value.trim();
        if (value.toLowerCase() === "exit") {
            outputDiv.innerHTML += "<br><strong>ระบบปิดการรับค่าแล้ว!</strong>";
            inputField.disabled = true; // ปิดการใช้งาน input
            break;
        }
        if (value !== "") {
            outputDiv.innerHTML += `<br>คุณพิมพ์: ${value}`;
            inputField.value = ""; // ล้างค่า input
        }
        break;
    }
}


// ฟังก์ชันสร้าง Array ขนาด 100 ช่อง ที่มีค่าตัวเลขสุ่ม 0-999
function generateArray() {
    arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    document.getElementById("originalArray").innerHTML = arr.join(", ");
    document.getElementById("sortedArray").innerHTML = "";
}

// ฟังก์ชัน Bubble Sort
function bubbleSort() {
    let sortedArr = [...arr]; // คัดลอกอาร์เรย์ต้นฉบับ
    let len = sortedArr.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // สลับค่า
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }

    document.getElementById("sortedArray").innerHTML = sortedArr.join(", ");
}


// ฟังก์ชัน Factorial โดยใช้ Recursion
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// ฟังก์ชันคำนวณ Factorial
function calculateFactorial() {
    let num = parseInt(document.getElementById("factorialInput").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("factorialResult").innerText = "กรอกตัวเลขที่มากกว่าหรือเท่ากับ 0";
        return;
    }
    document.getElementById("factorialResult").innerText = factorial(num);
}

// ฟังก์ชัน Fibonacci โดยใช้ Recursion
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// ฟังก์ชันคำนวณ Fibonacci Sequence
function calculateFibonacci() {
    let num = parseInt(document.getElementById("fibonacciInput").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("fibonacciResult").innerText = "กรอกตัวเลขที่มากกว่าหรือเท่ากับ 0";
        return;
    }
    
    let sequence = [];
    for (let i = 0; i < num; i++) {
        sequence.push(fibonacci(i));
    }
    document.getElementById("fibonacciResult").innerText = sequence.join(", ");
}




