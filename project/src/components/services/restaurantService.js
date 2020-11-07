import { API_URL, API_FETCH_URL } from "./config"


// Recuperer la liste de restaurant depuis le server
function fetchRestaurants(currentPage, pageSize, nameSearch) {
  let url =
    API_FETCH_URL + currentPage;
  url += "&pagesize=" + pageSize;
  url += "&name=" + nameSearch;

  return fetch(url)

}

// Ajouter un restaurant dans la base de donnée
function addRestaurant(event) {
  // Récupération du formulaire. Pas besoin de document.querySelector
  // ou document.getElementById puisque c'est le formulaire qui a généré
  // l'événement
  let form = event.target;
  // Récupération des valeurs des champs du formulaire
  // en prévision d'un envoi multipart en ajax/fetch
  let donneesFormulaire = new FormData(form);

  //let id = form._id.value; // on peut aller chercher la valeur
  // d'un champs d'un formulaire
  // comme cela, si on connait le nom
  // du champ (valeur de son attribut name)



  return fetch(API_URL, {
    method: "POST",
    body: donneesFormulaire,
  });


}

// Supprimer un restaurant 
function deleteRestaurant(restaurant) {


  return fetch(API_URL + restaurant._id, {
    method: "DELETE",
  })
    .then((responseJSON) => {
      responseJSON.json().then((res) => {
        console.log("restaurant supprimé avec succes ! ");
        console.log(res.msg);
      });
    })
    .catch((err) => {
      console.log(err.msg);
    });
}

// Recuperer un seul restaurant via son id
function fetchOneRestaurants(id) {
  return fetch(API_URL + id)
}

// Modifier les valeur d'un restaurant 
function editRestaurant(event, id) {
  // Pour éviter que la page ne se ré-affiche
  //event.preventDefault();

  // Récupération du formulaire. Pas besoin de document.querySelector
  // ou document.getElementById puisque c'est le formulaire qui a généré
  // l'événement
  let form = event.target;
  // Récupération des valeurs des champs du formulaire
  // en prévision d'un envoi multipart en ajax/fetch
  let donneesFormulaire = new FormData(form);

  //let id = form._id.value; // on peut aller chercher la valeur
  // d'un champs d'un formulaire
  // comme cela, si on connait le nom
  // du champ (valeur de son attribut name)
  console.log(url)

  let url = API_URL + id;

  return fetch(url, {
    method: "PUT",
    body: donneesFormulaire
  })
    .then((responseJSON) => {
      responseJSON.json()
        .then((res) => {
          // Maintenant res est un vrai objet JavaScript
          console.log("le restaurant est modifier monsieur lotfi :)" + res.msg)
        });
    })
    .catch( (err)=> {
      console.log(err);
    });

}



// Generer aleatoirement les cordonné d'une position
function generateLatLng(){
  let lat = Math.random() * (120.120 - (11.888)) + (11.888);
  let lng = Math.random() * (120.120 - (11.888)) + (11.888);

  const cord = [[lat,lng],[lat,lng]]
  console.log(cord[0])
  return cord[0];
}




export const restaurantService = {
  fetchRestaurants,
  addRestaurant,
  deleteRestaurant,
  fetchOneRestaurants,
  editRestaurant,
  generateLatLng




};
