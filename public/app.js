var app = function(){
  addCat("Nizmo","caviar","https://storage.googleapis.com/imgfave/image_cache/1392737882168487.jpg")
}

var addCat = function(){
  var catClass = createClass();
  var list = createList();
  var image = createImage();
  var cats = document.querySelector('#cats');
  appendElements(cats, catClass, list, image);
}

var createClass = function(){
  var catClass = document.createElement('ul');
  catClass.classList.add('ul');
  return catClass;
}

var createList = function(){
  var name = document.createElement('li');
  var food = document.createElement('li');
  name.innerText = "Name: " + name;
  food.innerText = "Food: " + food;
  return name, food;
}

var createImage = function(imageLink){
  var image = document.createElement('img');
  image.src =imageLink;
  return image;
}

var appendElements = function(cats, catClass, list, image){
  catClass.appendChild(image);
 catClass.appendChild(list);
  cats.appendChild(catClass);
}

window.onload = app