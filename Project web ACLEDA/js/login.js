
function show_data(){
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    if(email==""){
        alert("Please Input the Email")
    }
    if(password==""){
    alert("Please Input The Password")
    }
console.log("Email :" + email);
console.log("Password :" + password);
document.getElementById("email").value = '';
document.getElementById("password").value = '';

}