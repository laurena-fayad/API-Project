let property
let result

// Defining async function
async function getapi(url, pProperty) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON and displaying it
    var data = await response.json()
    show(data, pProperty)
}

// Function to display fetched data
function show(data, pProperty) {

    //Math equation results
    if(pProperty == "math"){
        result = `${data.result}`
        document.getElementById("math-result").innerHTML = result 
        //Palindrome results   
    }else if (pProperty == "palindrome"){
        result = `${data.result}`
        document.getElementById("palindrome-result").innerHTML = result  
        //Str cleanup results  
    }else if(pProperty == "str-cleanup"){
        result = `${data.trimmed_string}`
        document.getElementById("cleanup-result").innerHTML = result
        //Password validation results    
    }else if(pProperty == "password"){    
        result = `${data.result}`
        hash = `${data.pw_hash}`
        error = `${data.error}`
        document.getElementById("password-result").innerHTML = result 
        if (result == "Password rejected"){
            document.getElementById("error").innerHTML = "Error: " + error 
        }
    }
}
 
//Calling corresponding APIs URLS based on user input
document.getElementById("calculate-btn").addEventListener("click", function(){
    let operand1 = document.getElementById("operand1").value
    let operand2 = document.getElementById("operand2").value
    property = 'math'
    let math_api = "http://localhost/api-project/PHP/math-equation.php/?operand1=" + operand1 + "&operand2=" + operand2
    getapi(math_api, property);  
})

document.getElementById("palindrome-btn").addEventListener("click", function(){
    let string_input_pal = document.getElementById("palindrome-string").value
    property = 'palindrome'
    let palindrome_api = "http://localhost/api-project/PHP/palindrome-checker.php/?string=" + string_input_pal
    getapi(palindrome_api, property);  
})

document.getElementById("cleanup-btn").addEventListener("click", function(){
    let string_input_spaced = document.getElementById("string-cleanup").value
    property = 'str-cleanup'
    let string_cleaner_api = "http://localhost/api-project/PHP/string-cleaner.php/?string=" + string_input_spaced
    getapi(string_cleaner_api, property);  
})

document.getElementById("password-btn").addEventListener("click", function(){
    let pw_input = document.getElementById("password-input").value
    property = 'password'
    let password_api = "http://localhost/api-project/PHP/password-validator.php/?password=" + pw_input
    getapi(password_api, property);  
})

//Clearing input and result values upon 'Clear' click
document.getElementById("math-clr").addEventListener("click", function(){
    document.getElementById("operand1").value = ""
    document.getElementById("operand2").value = ""
    document.getElementById("math-result").innerHTML =""
})

document.getElementById("pal-clr").addEventListener("click", function(){
    document.getElementById("palindrome-string").value = ""
    document.getElementById("palindrome-result").innerHTML =""
})

document.getElementById("str-clr").addEventListener("click", function(){
    document.getElementById("string-cleanup").value = ""
    document.getElementById("cleanup-result").innerHTML = ""  
})

document.getElementById("pw-clr").addEventListener("click", function(){
    document.getElementById("password-result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
    document.getElementById("password-input").value = ""
})