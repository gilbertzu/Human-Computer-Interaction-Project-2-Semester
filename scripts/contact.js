console.log("Ready");

$(document).ready(
    function(){
    $("#err").hide(0);
    }
    )



function validation(){
    var nama = document.forms["contact"]["nama"].value
    var email = document.forms["contact"]["email"].value
    var msg = document.forms["contact"]["message"].value
    var err = document.getElementById("err")

    
    if(nama == ""){
       alert("Name Must be Filled")
       err.innerText = "Name Must be Filled"
       $("#err").show(0);
    }
    else if(email == ""){
        alert("Email Must be Filled")
        err.innerText = "Email Must be Filled"
        $("#err").show(0);
    }
    else if(!email.includes("@") || !email.includes(".")){
        alert("Email Is not Valid")
        err.innerText = "Email Is not Valid"
        $("#err").show(0);
    }
    else if(msg == ""){
        alert("Message Cannot be Empty")
        err.innerText = "Message Cannot be Empty"
        $("#err").show(0);
    }
    else{
       var ok = confirm("Are You Sure ?")
    }

    if(ok){
        alert("Your Message has Been Sent, Thank You for Your Feedback")
        window.location.replace("1. home.html")
    }
    
}

// console.log("test")