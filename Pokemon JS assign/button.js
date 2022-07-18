var x1 = document.getElementById('button-1');
var x2 = document.getElementById('button-2');
x1.addEventListener('click',function1);
x2.addEventListener('click',function2);

function function1()
{
  let name = confirm('Are you sure you want to leave?');
  window.location.href = "pik_images.html";
}

function function2()
{
  let name = confirm('Are you sure you want to leave?');
  window.location.href = "gladion.html";
}
