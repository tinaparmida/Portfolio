/**
 * WEB222 – Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <PARMIDA (TINA) KHAKIAN-DEHKORDI>
 *      Student ID: <133117226>
 *      Date:       <MARCH 24TH, 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createProductCard(product, showTitle = true, enableFlip = true) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("card-image-front");
  productImage.style.width = "100%";
  productImage.style.height = "300px";
  card.appendChild(productImage);

  // Create a <div> to hold the product details
  const container = document.createElement("div");
  container.classList.add("container");
  card.appendChild(container);

  // Create a <div> to hold the back of the card
  const cardBack = document.createElement("div");
  cardBack.classList.add("flip-card-inner", "card-back");
  card.appendChild(cardBack);

  // Create a <div> to hold the product description
  const productDescContainer = document.createElement("div");
  productDescContainer.classList.add("product-desc");
  productDescContainer.innerHTML = product.description;
  cardBack.appendChild(productDescContainer);

  // Hide the product image in the card-back element
  productImage.classList.add("hide");

  if (showTitle) {
    // Create a <h4> element for the product title
    const productTitle = document.createElement("h4");
    productTitle.innerHTML = product.title;
    container.appendChild(productTitle);
  }

  if (enableFlip) {
    // Add event listener to flip the card when clicked
     cards.forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.toggle('is-flipped');
    });
    card.addEventListener('touchend', () => {
      card.classList.toggle('is-flipped');
    });
  

  // Return the card's <div> element to the caller
  return card;
}

function createHomeProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("cardH");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("home-card-image");
  productImage.style.width = "200px";
  productImage.style.height = "200px";
  card.appendChild(productImage);

  // Return the card's <div> element to the caller
  return card;
}

function displayAllProducts() {
  const productContainer = document.getElementById("category-products");
  productContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = createHomeProductCard(product);
    productContainer.appendChild(card);
  }
}

function displayCategory(category) {
  var cards = document.getElementsByClassName("card");
  const productContainer = document.getElementById("category-products");
  productContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = createProductCard(product, true, true);
    productContainer.appendChild(card);
  }
  // Loop through the cards and show or hide them based on the selected category
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var productCategories = window.products[i].categories;
    if (productCategories.indexOf(category) !== -1) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  }
}

document.getElementById("skills").addEventListener("click", function () {
  document.getElementById("category-products").style.display = "table";

  // Loop through the products array and create a card for each product

  displayCategory("skills");
});

document.getElementById("education").addEventListener("click", function () {
  document.getElementById("category-products").style.display = "table";

  // Loop through the products array and create a card for each product

  displayCategory("education");
});

document.getElementById("hobbies").addEventListener("click", function () {
  document.getElementById("category-products").style.display = "table";

  // Loop through the products array and create a card for each product

  displayCategory("hobbies");
});

document.getElementById("home").addEventListener("click", function () {
  document.getElementById("category-products").style.display = "table";
  displayAllProducts();
});
