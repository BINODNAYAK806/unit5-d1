// function giveUsers() {

//     for (let i = 0; i < 10; i++) {
//     fetch('https://randomuser.me/api/')
//       .then(function (response) {
//         return response.json();
//     })
  
//     .then(function (data) {
//       showUsers(data.results);
//     })
  
//     .catch(function (error) {
//       console.log("error", error);
//     });
  
//     let showUsers = (users) => {
//         users.forEach(user => {
//           // console.log(user.registered.age);
//           // console.log(user.location.city);
//           let firstName = user.name.first;
//           let id = user.id;
  
//           console.log(firstName);
//           localStorage.setItem('allUsers', firstName);  
//        });
//     };}
//   }
  
  
//   if(localStorage.getItem('allUsers')){
//     console.log(localStorage.getItem('allUsers'));
//   }


//   giveUsers()

  fetch('https://pokeapi.co/api/v2/{endpoint}/')
  .then(response => response.json())
  .then(data => console.log(data));