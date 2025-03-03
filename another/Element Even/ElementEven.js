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