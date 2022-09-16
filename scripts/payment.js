console.log("Ready");

$(document).ready(
    function(){
    $("#er").hide(0);
    $("#auth").hide(0);
    }
    )



function validation(){
    var nama = document.forms["payment"]["nama"].value
    var email = document.forms["payment"]["email"].value
    var address = document.forms["payment"]["address"].value
    var city = document.forms["payment"]["city"].value
    var method = document["payment"]["method"].value
    var agree = document.getElementById("terms").checked
    var err = document.getElementById("er")

    
    if(nama == ""){
        var ok = confirm("Are You Sure ?")
       alert("Name Must be Filled")
       err.innerText = "Name Must be Filled"
       $("#er").show(0);
    }
    else if(email == ""){
        var ok = confirm("Are You Sure ?")
        alert("Email Must be Filled")
        err.innerText = "Email Must be Filled"
        $("#er").show(0);
    }
    else if(!email.includes("@") || !email.includes(".")){
        var ok = confirm("Are You Sure ?")
        alert("Email Is not Valid")
        err.innerText = "Email Is not Valid"
        $("#er").show(0);
    }
    else if(city == "empty"){
        var ok = confirm("Are You Sure ?")
        alert("Please Choose Your City")
        err.innerText = "Please Choose Your City"
        $("#er").show(0);
    }
    else if(address == ""){
        var ok = confirm("Are You Sure ?")
        alert("Address Cannot be Empty")
        err.innerText = "Address Cannot be Empty"
        $("#er").show(0);
    }
    else if(!agree){
        var ok = confirm("Are You Sure ?")
        alert("Please Check with Our Terms")
        err.innerText = "Please Check with Our Terms"
        $("#er").show(0);
    }
    else{
        if(method == "cc"){
            var ok = confirm("Are You Sure ?")
            $(".process").hide(0);
            $("#auth").show(0);
        }
        else{
            
            alert("Thank You, for Your Payment")
            window.location.replace("1. home.html")
        }
        
    }
    
    
        
}

function authentication(){
    var card = document.forms["payment"]["card"].value
    var valid = document.forms["payment"]["valid"].value
    var cvv = document.forms["payment"]["cvv"].value
    
    if(card == ""){
        alert("Card Number cannot be Empty")
    }
    else if(isNaN(card)== true){
        alert("Your Card Number is not Valid")
    }
    else if(valid == ""){
        alert("Validity cannot be Empty")
    }
    else if(cvv == ""){
        alert("CVV cannot be Empty")
    }
    else if(isNaN(cvv)){
        alert("Your Card is not Valid")
    }
    else{
        var auth = confirm("Are You Sure ?")
    }

    if(auth){
        alert("Thank You, for Your Payment")
        window.location.replace("1. home.html")
    }
    
}
