const apilink = "https://fakestoreapi.com/products/";

const getProductData = () => {
  const queryString = window.location.search;
  // console.log(queryString);

  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  // console.log(id, "id");
  fetch(`${apilink}${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const pCategory = data.category;
      similarCategoryProducts(pCategory);
      console.log("data", data);

      const divtarg = document.getElementById("parentProduct");
      // console.log(divtarg, "divtarg");
      divtarg.innerHTML = `<div class="container my-5">
      <div class="row" id="parentProduct">
        <div class="col-md-5">
          <div class="main-img">
            <img
              class="img-fluid"
              src="${data.image}"
              alt="ProductS"
            />
            <div class="row my-3 previews">
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="main-description px-2">
            <div class="category text-bold">${data.category}</div>
            <div class="product-title text-bold my-3">
              ${data.title}
            </div>

            <div class="price-area my-4">
              <!-- <p class="old-price mb-1"><del>$22.3</del> <span class="old-price-discount text-danger">(20% off)</span></p> -->
              <p class="new-price text-bold mb-1">$${data.price}</p>
              <p class="text-secondary mb-1">
                (Additional tax may apply on checkout)
              </p>
            </div>

            <!-- <div class="buttons d-flex my-5">
                        <div class="block">
                            <a href="#" class="shadow btn custom-btn ">Wishlist</a>
                        </div>
                        <div class="block">
                            <button class="shadow btn custom-btn">Add to cart</button>
                        </div>

                        <div class="block quantity">
                            <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity">
                        </div>
                    </div> -->
          </div>

          <div class="product-details my-4">
            <p class="details-title text-color mb-1">Product Details</p>
            <p class="description">
              ${data.description}
            </p>
          </div>

          <div class="row questions bg-light p-3">
            <div class="col-md-1 icon">
              <i class="fa-brands fa-rocketchat questions-icon"></i>
            </div>
            <div class="col-md-11 text">
              Have a question about our products at E-Store? Feel free to
              contact our representatives via live chat or email.
            </div>
          </div>

          <div class="delivery my-4">
            <p class="font-weight-bold mb-0">
              <span><i class="fa-solid fa-truck"></i></span>
              <b>Delivery done in 3 days from date of purchase</b>
            </p>
            <p class="text-secondary">Order now to get this product delivery</p>
          </div>
          <div class="delivery-options my-4">
            <p class="font-weight-bold mb-0">
              <span><i class="fa-solid fa-filter"></i></span>
              <b>Delivery options</b>
            </p>
            <p class="text-secondary">View delivery options here</p>
            <a href="form.html"><button type="button" class="btn btn-dark btn-rounded" data-mdb-ripple-init>Order Now</button></a>
          </div>
        </div>
      </div>
    </div> `;
    });
};

getProductData();

const SMP = document.getElementById("parentCategory");
// console.log(SMP);

const similarCategoryProducts = (category) => {
  fetch(`${apilink}category/${category}?limit=4`)
    .then((res) => res.json())
    .then((data) => {
      const mapCategory = data.map(
        (d) =>
          `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key="${d.id}">
        <a href="productsdetails.html?id=${d.id}" style="text-decoration: none;">
          <div class="card m-2 myCard border border-dark">
                <img src="${d.image}" class="card-img-top" style="height:200px; object-fit: contain;" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style="text-overflow: ellipsis;
  overflow: hidden;  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${d.title}</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">$${d.price}</small>
                  </p>
                </div>
                </div>
                </a>
              </div>`
      );

      SMP.innerHTML = mapCategory.join("");
    });
};

