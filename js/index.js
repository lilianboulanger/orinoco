

//    Connexion API
var get = function (url) {
    return new Promise(function (resolve, reject) {
      var getproduct = new XMLHttpRequest();
  
      getproduct.onreadystatechange = function () {
        if (getproduct.readyState === 4) {
          if (getproduct.status === 200) {
            resolve(getproduct.responseText);
          } else {
            reject(getproduct);
          };
        };
      };

      getproduct.open('GET','http://localhost:3000/api/teddies/', true);
     
      getproduct.send();
    });
  };

var catchError = function(e){
  console.error('Error', e);
};



//    Récupération des données


get();
var ours = function () {
  return get('http://localhost:3000/api/teddies/').then(function (response) {
    var teddies = JSON.parse(response);
    return teddies;
  });
};
let ourson = document.getElementById('ourson');

  // Afficher articles

ours().then(function(teddies){
  console.log(teddies);

  teddies.forEach( teddy=>{
  
    var article = document.createElement('article');
    var image = document.createElement('img');
    image.src =  teddy.imageUrl;
    var div = document.createElement('div');
    var nom = document.createElement('h3');
    nom.className="nom"
    nom.textContent = teddy.name;
    var prix = document.createElement('h4');
    prix.textContent = 'Prix :';
    var price = document.createElement('p');
    price.className="prix"
    price.textContent = teddy.price/100 + ' €';
    var desc = document.createElement('h4');
    desc.textContent = 'Description :';
    var description = document.createElement('p');
    description.className="desc"
    description.textContent = teddy.description;
    var id = teddy._id;

    let link = document.createElement('a');
    link.id = "lien";
    link.href = 'produit.html?id=' + teddy._id;
    link.textContent = "Plus d'infos";


    ourson.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(prix);
    div.appendChild(price);
    div.appendChild(desc);
    div.appendChild(description);
    div.appendChild(link)
    
    console.log(teddy);
  });
});