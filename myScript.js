var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn")
flag = false;
function register()
{
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"
}
function login()
{
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0";
}
function LOGIN1()
{
  flag = false;
  var username = document.getElementById('UserID').value;
  var password = document.getElementById('Pass').value;
  if(username == "Phung" && password == "12345")
  {
      flag =  true;
  }
  else flag = false;
  if(flag == true) 
  {
    window.alert("Bạn đăng nhập thành công");
    window.location.href = "index1.html";
    window.location.replace("index1.html");
  }
  else window.alert("Bạn đăng nhập thất bại")
}

function REGISTER1()
{
  window.alert("Bạn đăng ký thành công");
  window.location.href = "index1.html";
}