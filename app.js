// const card = document.querySelector(".card");

// const weatherData = [
//   {
//     id: 1,
//     title: "hello",
//     description: "my name is kaif",
//     img: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg",
//     temp: "55C",
//   },
//   {
//     id: 2,
//     title: "hello",
//     description: "my name is haif",
//     img: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg",
//     temp: "55C",
//   },
//   {
//     id: 3,
//     title: "hello",
//     description: "my name is maif",
//     img: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg",
//     temp: "60C",
//   },
//   {
//     id: 4,
//     title: "hello",
//     description: "my name is saif",
//     img: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg",
//     temp: "65C",
//   },
// ];

// const dataTrans = weatherData.map(
//   (data) =>
//     `<div class="card">
//         <img src="${data.img}" class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">${data.title}</h5>
//           <p class="card-text">
//             ${data.description}
//           </p>
//           <p class="card-text">
//             <small class="text-body-secondary">${data.temp}</small>
//           </p>
//         </div>
//       </div>`
// );

// const cardMap = document.querySelector(".card-group");
// cardMap.innerHTML = dataTrans.join("");

const dataFetch = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const dataTrans = data.map(
          (d) =>
            `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key="${d.id}">
          <div class="card m-2 myCard">
                <img src="${d.image}" class="card-img-top" style="height:200px; object-fit: contain;" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style="text-overflow: ellipsis;
  overflow: hidden;  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${d.title}</h5>
                  <p class="card-text" style="text-overflow: ellipsis;
  overflow: hidden;  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    ${d.description}
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">$${d.price}</small>
                  </p>
                </div>
                </div>
              </div>`
        );

        const cardMap = document.getElementById("cardParent");
cardMap.innerHTML = dataTrans.join("");
    });
};

dataFetch();


