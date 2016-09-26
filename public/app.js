  window.onload = function(){

  //1. Create the parent container and it's class
  var cats = document.createElement('cats');
  cats.classList.add('cat')

  //2. Create the first child (name)
  var name = document.createElement('il');
  name.innerText = "Nizmo ";

  //3. Create the child inside the name
  var food = document.createElement('il');
  food.innerText = "Caviar";

  var image = document.createElement('img');
  image.src = "https://storage.googleapis.com/imgfave/image_cache/1392737882168487.jpg";

  //4. Append the food to the name
  cats.appendChild(food);

  //5. Apprend the name to the cat
  cats.appendChild(name);

  //6. Add everything to the cats list
  var cats = document.querySelector('#cats');
  cats.appendChild(cats);
}



// var app = function(){
//   addCat("Nizmo","caviar","https://storage.googleapis.com/imgfave/image_cache/1392737882168487.jpg")
// }

// var addCat = function(){
//   var catClass = createClass();
//   var list = createList();
//   var image = createImage();
//   var cats = document.querySelector('#cats');
//   appendElements(cats, catClass, list, image);
// }

// var createClass = function(){
//   var catClass = document.createElement('ul');
//   catClass.classList.add('ul');
//   return catClass;
// }

// var createList = function(){
//   var name = document.createElement('li');
//   // var food = document.createElement('li');
//   name.
//   // food.innerText = "food: " + food;
//   return name;
// }

// var createImage = function(imageLink){
//   var image = document.createElement('img');z0
//   image.src =imageLink;
//   return image;
// }

// var appendElements = function(cats, catClass, list, image){
//   catClass.appendChild(image);
//  catClass.appendChild(list);
//   cats.appendChild(catClass);
// }

// window.onload = app