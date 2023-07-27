const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const shoppingCartMenuIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartMenuIcon.addEventListener('click', toggleShoppingCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  } else if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  } 

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  } 

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

// function toggleDesktopMenu() {
//   shoppingCartContainer.classList.add('inactive');
//   desktopMenu.classList.toggle('inactive');
//   productDetailContainer.classList.add('inactive');
// }

// function toggleMobileMenu() {
//   desktopMenu.classList.add('inactive');
//   shoppingCartContainer.classList.add('inactive');
//   mobileMenu.classList.toggle('inactive');
//   productDetailContainer.classList.add('inactive');
// }

// function toggleShoppingCartAside() {
//   desktopMenu.classList.add('inactive');
//   mobileMenu.classList.add('inactive');
//   shoppingCartContainer.classList.toggle('inactive');
//   productDetailContainer.classList.add('inactive');
// } 

// function openProductDetailAside() {
//   productDetailContainer.classList.remove('inactive');
// }

// function closeProductDetailAside() {
//   productDetailContainer.classList.add('inactive');
//   shoppingCartContainer.classList.toggle('inactive');
//   mobileMenu.classList.add('inactive');
//   desktopMenu.classList.add('inactive');
// }

const productList = [];
productList.push({
  name: 'Wicker Basket',
  price: '29,95',
  image: 'https://www.ikea.com/ca/en/images/products/snidad-basket-rattan__0906626_pe667276_s5.jpg'
});
productList.push({
  name: 'Sweater',
  price: '22,70',
  image: 'https://images.pexels.com/photos/5464589/pexels-photo-5464589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
  name: 'Vintage Mirror',
  price: '44,90',
  image: 'https://images.pexels.com/photos/8723289/pexels-photo-8723289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
});
productList.push({
  name: 'Scented Candle',
  price: '12,80',
  image: 'https://images.pexels.com/photos/9869339/pexels-photo-9869339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
});
productList.push({
  name: 'Record Player',
  price: '49,90',
  image: 'https://images.pexels.com/photos/16902794/pexels-photo-16902794/free-photo-of-retro-gramophone-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
});productList.push({
  name: 'Decorative Pillows',
  price: '21,70',
  image: 'https://i.roamcdn.net/hz/pi/listing-thumb-543w/7daecf7423834a6481a012a21514adfb/-/horizon-files-prod/pi/picture/qmeqe0w/3258f9255389aacbcc17446aaf2f8ea7fd3ee3fb.png' 
});
productList.push({
  name: 'Artisanal Earrings',
  price: '15,35',
  image: 'https://cdn.shopify.com/s/files/1/0617/4090/8734/products/IMG_5292.jpg?v=1659921066&width=533' 
});
productList.push({
  name: 'Deathly Hallows Table Lamp',
  price: '22,40',
  image: 'https://worthpin.com/wp/wp-content/uploads/2018/09/deathly-hallows-projection-light-by-firebox-1536286552n4gk8.jpg' 
});
productList.push({
  name: 'Terrarium From The Movie Up',
  price: '45,50',
  image: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_1200,pg_1,t_base_params,w_1200/v1617991249/blog-post-covers/000/007/399/7399-original.jpg?1617991249' 
});
productList.push({
  name: 'Three Vases Set',
  price: '38,90',
  image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cherry-blossoms-and-vases-sandi-oreilly.jpg' 
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);