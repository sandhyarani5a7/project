import React from 'react';

import kids1 from '../assets/kid1.jpg';
import kids2 from '../assets/kid2.jpeg';
import kids3 from '../assets/kid3.jpg';
import kids4 from '../assets/kid4.jpg';
import kids5 from '../assets/kid5.jpg';

import kids6 from '../assets/kid6.jpg';
import kids7 from '../assets/kid7.jpg';
import kids8 from '../assets/kid8.png';
import kids9 from '../assets/kid9.jpg';
import kids10 from '../assets/kid10.jpg';
import kids11 from '../assets/kid11.jpg';
import kids12 from '../assets/kid12.jpeg';
import kids13 from '../assets/kid13.png';
import kids14 from '../assets/kid14.jpg';
import kids15 from '../assets/kid15.jpg';

import cupon1 from '../assets/cupon1.png';
import cupon2 from '../assets/cupons2.avif';

const Kids = ({ addToCart }) => {


 
  const products = [
    { id: 1, image: kids1, name: 'T-Shirt', sizes: ['XS', 'S', 'M'], colors: ['Red', 'Blue'], cost: '₹300' },
    { id: 2, image: kids2, name: 'Jeans', sizes: ['S', 'M', 'L'], colors: ['Black', 'Blue'], cost: '₹700' },
    { id: 3, image: kids3, name: 'Jacket', sizes: ['S', 'M', 'L'], colors: ['Yellow', 'Green'], cost: '₹1200' },
    { id: 4, image: kids4, name: 'Sweater', sizes: ['XS', 'S', 'M'], colors: ['Pink', 'Blue'], cost: '₹800' },
    { id: 5, image: kids5, name: 'Shorts', sizes: ['S', 'M', 'L'], colors: ['Red', 'Yellow'], cost: '₹400' },
    { id: 6, image: kids6, name: 'Shirt', sizes: ['XS', 'S', 'M'], colors: ['White', 'Blue'], cost: '₹500' },
    { id: 7, image: kids7, name: 'Track Pants', sizes: ['S', 'M', 'L'], colors: ['Grey', 'Black'], cost: '₹600' },
    { id: 8, image: kids8, name: 'Dress', sizes: ['XS', 'S', 'M'], colors: ['Pink', 'Purple'], cost: '₹900' },
    { id: 9, image: kids9, name: 'Hoodie', sizes: ['S', 'M', 'L'], colors: ['Blue', 'Green'], cost: '₹1000' },
    { id: 10, image: kids10, name: 'Sandals', sizes: ['XS', 'S', 'M'], colors: ['Brown', 'Black'], cost: '₹500' },
  ];

 

  return (
    <div className="kids-page">
      {/* Brands Section */}
      <div className="brands-section">
        <h2>Brands</h2>
        <div className="brand-images">
          <div className="image-wrapper">
            <img src={kids11} alt="Brand 1" />
            <h5><strong>Babyhug</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids12} alt="Brand 2" />
            <h5><strong>H&M Kids</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids13} alt="Brand 3" />
            <h5><strong>Carter's</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids14} alt="Brand 4" />
            <h5><strong>Gini & Jony</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids15} alt="Brand 5" />
            <h5><strong>Chicco</strong></h5>
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="coupons-section">
        <div className="coupon-images">
          <div className="image-wrapper">
            <img src={cupon1} alt="Coupon 1" className="coupon-wrapper" />
          </div>
          <div className="image-wrapper">
            <img src={cupon2} alt="Coupon 2" className="coupon-wrapper"/>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="category-images">
          <div className="image-wrapper">
            <img src={kids6} alt="Category 1" />
            <h5><strong>Casual Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids7} alt="Category 2" />
            <h5><strong>Formal Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids8} alt="Category 3" />
            <h5><strong>Sports Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids9} alt="Category 4" />
            <h5><strong>Footwear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={kids10} alt="Category 5" />
            <h5><strong>Accessories</strong></h5>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Products</h2>
        <div className="product-images">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image"/>
              <div className="product-details">
                <h5>{product.name}</h5>
                <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
                <p><strong>Colors:</strong> {product.colors.join(', ')}</p>
                <p><strong>Cost:</strong> {product.cost}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;
