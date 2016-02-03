window.onload = function() {
console.log('loaded');
};
var test = function(){
  alert('works');
  console.log('works');
}
var f = function (p){
  var result = {};
  var array = p.split(' ');
  for (var i = 0; i<array.length; i++){
    result[array[i]] = (result[array[i]] || 0) + 1;
  }
  console.log(result);
  var show = document.createElement("p");
  show.innerHTML = JSON.stringify(result, null, 2);
  document.body.appendChild(show);
}
