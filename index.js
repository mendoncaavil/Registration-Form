

function validate(){
    let first_name = document.getElementById("first_name").value; 
    let last_name = document.getElementById("last_name").value;
    let emailInput = document.getElementById("emailInput").value;
    let cityInput = document.getElementById("cityInput").value;
    let stateInput = document.getElementById("stateInput").value;
    let zipInput = document.getElementById("zipInput").value;
    let tnc = document.getElementById("tnc").checked;

    let error = false;

    if(first_name){
        document.getElementById("firstName_Valid").style.display = "block";
        document.getElementById("firstName_Invalid").style.display = "none";
    }
    else{
        document.getElementById("firstName_Invalid").style.display = "block";
        document.getElementById("firstName_Valid").style.display = "none";
        error = true;
    }

    if(last_name){
        document.getElementById("lastName_Valid").style.display = "block";
        document.getElementById("lastName_Invalid").style.display = "none";
    }
    else{
        document.getElementById("lastName_Invalid").style.display = "block";
        document.getElementById("lastName_Valid").style.display = "none";
        error = true;
    }

    // mendoncaavil@gmail.com

    // lastindexof . = 18,

    // length =  22,

    if(emailInput && emailInput.includes("@") && emailInput.includes(".") && emailInput.lastIndexOf(".") +2 <= emailInput.length && emailInput.indexOf("@")!=0){
        document.getElementById("emailID_valid").style.display = "block";
        document.getElementById("emailID_Invalid").style.display = "none";
    }
    else{
        document.getElementById("emailID_Invalid").style.display = "block";
        document.getElementById("emailID_valid").style.display = "none";
        error = true;
    }


    if(cityInput && cityInput.length >= 3){
        document.getElementById("city_valid").style.display = "block";
        document.getElementById("city_Invalid").style.display = "none";
    }
    else{
        document.getElementById("city_Invalid").style.display = "block";
        document.getElementById("city_valid").style.display = "none";
        error = true;
    }



    if(stateInput){
        document.getElementById("state_valid").style.display = "block";
        document.getElementById("state_Invalid").style.display = "none";
    }
    else{
        document.getElementById("state_Invalid").style.display = "block";
        document.getElementById("state_valid").style.display = "none";
        error = true;
    }


    if(zipInput.length === 6 &&  parseInt(zipInput)){  
        console.log(parseInt(zipInput));
        document.getElementById("zip_valid").style.display = "block";
        document.getElementById("zip_Invalid").style.display = "none";       
    }
    else{
        document.getElementById("zip_Invalid").style.display = "block";
        document.getElementById("zip_valid").style.display = "none";
        error = true;
    }

    if(tnc){
        document.getElementById("tnc_valid").style.display = "block";
        document.getElementById("tnc_Invalid").style.display = "none";
    }
    else{
        document.getElementById("tnc_Invalid").style.display = "block";
        document.getElementById("tnc_valid").style.display = "none";
        error = true;
    }
    
    if(!error){
        alert("Your details have been submitted successfully");
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("cityInput").value = "";
        document.getElementById("stateInput").value = "";
        document.getElementById("zipInput").value = "";
        document.getElementById("tnc").checked = false;
    }
}