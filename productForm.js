
const formSubmit = () => {
  const title = document.getElementById("title").value;
  const productCategory = document.getElementById("productCategory").value;
  const productQuantity = document.getElementById("productQuantity").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;

    const productData = {
        title: title,
        productCategory: productCategory,
        productQuantity: productQuantity,
        description: description,
        image: image
    };

    saveFormData(productData);

setTimeout(() => {
  document.addProductForm.reset();
}, 4000);

}

const saveFormData = (productData) => {
    const storedFormData = JSON.parse(localStorage.getItem('productData')) || [];

    storedFormData.push(productData);

    localStorage.setItem('productData', JSON.stringify(storedFormData));
    console.log(storedFormData)
}








// form submit

// const formSubmit = () => {
//   const title = document.getElementById("title").value;
//   const productCategory = document.getElementById("productCategory").value;
//   const productQuantity = document.getElementById("productQuantity").value;
//   const description = document.getElementById("description").value;
//   const image = document.getElementById("image").value;

//   localStorage.setItem("title", title);
//   localStorage.setItem("productCategory", productCategory);
//   localStorage.setItem("productQuantity", productQuantity);
//   localStorage.setItem("description", description);
//   localStorage.setItem("image", image);

//   console.log(localStorage.getItem("title"));
//   console.log(localStorage.getItem("productCategory"));
//   console.log(localStorage.getItem("productQuantity"));
//   console.log(localStorage.getItem("description"));
//   console.log(localStorage.getItem("image"));

//   setTimeout(() => {
//     document.addProductForm.reset();
//   }, 4000);
// };

// submit message show
const message = () => {
    const title = document.getElementById("title").value;
    const category = document.getElementById("productCategory").value;
    const quantity = document.getElementById("productQuantity").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;
  
    const messageSubmit = document.getElementById("messageSubmit");
    const messageNotSubmit = document.getElementById("messageNotSubmit");
  
    if (title && category && quantity && description && image) {
      messageSubmit.style.display = "block";
      messageNotSubmit.style.display = "none";
    } else {
      messageSubmit.style.display = "none";
      messageNotSubmit.style.display = "block";
    }
  
    setTimeout(() => {
      messageNotSubmit.style.display = "none";
      messageSubmit.style.display = "none";
    }, 4000);
  };
  
  // imaageshow on screen
  const showImage = () => {
    const imageShow = document.getElementById("imageShow");
    const inputfile = document.getElementById("image");
  
    inputfile.onchange = () => {
      imageShow.src = URL.createObjectURL(inputfile.files[0]);
    };
  };
  showImage();
  
  
  
  
  
  