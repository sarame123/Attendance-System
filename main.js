
var fname = document.getElementById('fname');
    var lname = document.getElementById('sname');
    var address = document.getElementById('add');
    var email = document.getElementById('email');
    var psw = document.getElementById('password');
var age=document.getElementById('age');
var registerValidation = document.querySelector('.register-validation');
 var validationEmail=document.getElementById('validation-email');
 var validationName=document.getElementById('validation-name');
 var validationLname=document.getElementById('validation-lname');
 var validationage=document.getElementById('validation-age');
 var validationAdress=document.getElementById('validation-Adress');
 function clear() {
   fname.value= "";
  email.value = "";
    psw.value = "";
  
  }
  function addressRegex() {
    var pattern = /^[a-zA-z0-9]{2,50}$/
    return pattern.test(address.value)
    
  
  }
  function nameRegex() {
    var pattern = /^[a-zA-z0-9]{2,50}$/
    return pattern.test(fname.value)
    
  
  }
  function lnameRegex() {
    var pattern=/^[a-zA-z0-9]{2,50}$/
    return pattern.test(lname.value)
  
  }
  function ageRegex() {
    var pattern=/^[20-30]+$/;
    return pattern.test(age.value)
  
  }
  function passwordRegex() {
    var pattern = /^[a-zA-z0-9]{2,50}$/
   
    return pattern.test(psw.value)
  
  }
  
  function emailRegex() {
    var regex = /^[a-zA-z]{2,30}\.?[a-zA-Z0-9]{2,255}\@[a-zA-Z]{2,50}\.[a-zA-Z]{1,10}$/
    return regex.test(email.value);
  }
 function notValid() {
    if (!nameRegex()) {
      if (fname.value== "") {
        validationName.innerHTML = "Please fill this box,All input is required"
      }
      else {
        validationName.innerHTML = "pattern not valid,please enter the valid pattern name"
      }
    }
    else if (!lnameRegex()) {
        validationName.innerHTML =""
        if (lname.value== "") {
            validationLname.innerHTML = "Please fill this box,All input is required"
        }
        else {
            validationLname.innerHTML = "pattern not valid,please enter the valid pattern name"
        }
      }
      else if (!addressRegex()) {
        validationLname.innerHTML=""
        if (address.value== "") {
           validationAdress.innerHTML = "Please fill this box,All input is required"
        }
        else {
           validationAdress.innerHTML = "pattern not valid,please enter the valid pattern name"
        }
      }
      else if (!emailRegex()) {
        validationAdress.innerHTML=""
      if (email.value== "") {
        validationEmail.innerHTML = "Please fill this box,All input is required"
      }
      else {
        validationEmail.innerHTML = "pattern not valid,please enter the valid pattern"
      }
    }
      else if (!ageRegex()) {
        validationEmail.innerHTML=""
        if (age.value== "") {
           validationage.innerHTML = "Please fill this box,All input is required"
        }
        else {
           validationage.innerHTML = "pattern not valid,please enter the valid pattern name"
        }
      }
  
    else if (!passwordRegex()) {
      validationage.innerHTML=""
      if (psw.value== "") {
        registerValidation.innerHTML = "Please fill this box,All input is required"
      }
      else {
        registerValidation.innerHTML = "pattern not valid,please enter the valid pattern"
      }
    }
  
  
  }
//---------------------------------------------------------------------

var arrOfRequests = [];
var ajaxreq = function() { 

    $.ajax({
        url: './Requests.json',
        type: "get",   
        success: function(res) {
            arrOfRequests = res;
        },
        error: function(ErrorMessage) {
            console.log(ErrorMessage);
        }
    })
 
}
ajaxreq();

var reqOb = {};
$('#regist').on('click', function(e) {
    e.preventDefault()
   if(emailRegex() && passwordRegex() && nameRegex() && lnameRegex() && addressRegex() && ageRegex()){
    validationName.innerHTML ="",
    validationage.innerHTML="",
    validationAdress.innerHTML="",
    validationEmail.innerHTML="",
    validationLname.innerHTML="",
    registerValidation.innerHTML="",
    $(selector).val();
    
    pushing();
     aler("thank you for registeration and we will inform you details");
  }
    else{
        notValid()
    }

});

function pushing() {


    reqOb["firstName"] = $('#fname').val();
    reqOb["lastName"] = $('#sname').val();
    reqOb["address"] = $('#add').val();
    reqOb["email"] = $('#email').val();
    reqOb["age"] = $('#age').val();
    reqOb["userName"] = $('#username').val();
    reqOb["password"] = $('#password').val();
    arrOfRequests.push(reqOb);
    saveData();
}

function saveData() {
    var _StoreData = new Blob([JSON.stringify(arrOfRequests)], { type: "appliction/json" });
    var Linkelement = document.createElement("a");
    Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
    Linkelement.setAttribute("download", "Requests.json");
    document.body.appendChild(Linkelement);
    Linkelement.click();
    document.body.removeChild(Linkelement);

}

let arr = [];
var ajaxemp = function() { // data from empolyee(username and password) file

    $.ajax({
        url: './alldata.json',
        type: "get",
        success: function(res) {
            arr = res;
        },
        error: function(ErrorMessage) {
            console.log(ErrorMessage);
        }
    })
    return arr;
}
ajaxemp();
console.table(arr);


$('#logemp').on('click', function() {

    username = $('#uname').val();
    password = $('#pwd').val();
 
    if (username === arr[0].userName && password === arr[0].password) { //login form ----->id logform
        window.location.href= 'Admin.html';
        console.log("admin");

    } else if (username == arr[1].userName && password == arr[1].password) {
        window.location.href= 'subAdmin.html';
        console.log("sub");

    } else

        for (var i = 2; i < arr.length; i++) {
        if (username == arr[i].userName && password == arr[i].password)
        window.location.href= 'empolyee.html';
        localStorage.setItem('userN', username);


    }
});