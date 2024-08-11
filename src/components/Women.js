import React from 'react';

import women1 from '../assets/women1.jpg'; 
import women2 from '../assets/women2.png';
import women3 from '../assets/women3.jpg';
import women4 from '../assets/women4.png';
import women5 from '../assets/women5.jpg';

import women6 from '../assets/women6.jpg';
import women7 from '../assets/women7.jpg';

import women8 from '../assets/women8.jpg';
import women9 from '../assets/women9.jpeg';
import women10 from '../assets/women10.jpg'; 
import women11 from '../assets/women11.jpg';
import women12 from '../assets/women12.jpg'; 
import women13 from '../assets/women13.jpg';
import women14 from '../assets/women14.jpg';
import women15 from '../assets/women15.jpg'; 
import women16 from '../assets/women16.png';
import women17 from '../assets/women17.jpeg';
import cupon1 from '../assets/cupon1.png';
import cupon2 from '../assets/cupons2.avif';
import women19 from '../assets/women19.jpg';
import women20 from '../assets/women20.jpg';
import women21 from '../assets/women21.jpeg'; 
import women22 from '../assets/women22.jpeg';
import women23 from '../assets/women23.jpg'; 
import women24 from '../assets/women24.jpg';
import women25 from '../assets/women25.jpg';
import women26 from '../assets/women26.jpg'; 




const Women = ({ addToCart }) => {
    
    
    const products = [
      { id: 1, image: women3, name: 'Dress', sizes: ['S', 'M', 'L'], colors: ['Red', 'Black'], cost: '₹2000' },
      { id: 2, image: women4, name: 'Skirt', sizes: ['M', 'L'], colors: ['Blue', 'Grey'], cost: '₹1200' },
      { id: 3, image: women5, name: 'Blouse', sizes: ['S', 'M', 'L'], colors: ['White', 'Pink'], cost: '₹800' },
      { id: 4, image: women6, name: 'Jacket', sizes: ['M', 'L', 'XL'], colors: ['Brown', 'Black'], cost: '₹2500' },
      { id: 5, image: women7, name: 'Leggings', sizes: ['S', 'M', 'L'], colors: ['Black', 'Navy'], cost: '₹1000' },
      { id: 6, image: women8, name: 'Coat', sizes: ['M', 'L', 'XL'], colors: ['Beige', 'Charcoal'], cost: '₹3000' },
      { id: 7, image: women9, name: 'Cardigan', sizes: ['S', 'M', 'L'], colors: ['Cream', 'Grey'], cost: '₹1500' },
      { id: 8, image: women10, name: 'Blazer', sizes: ['M', 'L'], colors: ['Black', 'Brown'], cost: '₹2000' },
      { id: 9, image: women1, name: 'Top', sizes: ['S', 'M', 'L'], colors: ['Red', 'White'], cost: '₹1200' },
      { id: 10, image: women2, name: 'Shirt', sizes: ['S', 'M', 'L'], colors: ['Blue', 'Green'], cost: '₹900' }
      ];

     
  return (
    <div className="men-page">
      {/* Brands Section */}
      <div className="brands-section">
        <h2>Brands</h2>
        <div className="brand-images">
          <div className="image-wrapper">
            <img src={women13} alt="Brand 1" />
            <h5><strong>Wrangler</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women14} alt="Brand 2" />
            <h5><strong>Puma</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women15} alt="Brand 3" />
            <h5><strong>Adidas</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women16} alt="Brand 4" />
            <h5><strong>Crocs</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women17} alt="Brand 5" />
            <h5><strong>WoodLand</strong></h5>
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="coupons-section">
       
        <div className="coupon-images">
          <div className="image-wrapper">
            <img src={cupon1} alt="Coupon 1" className="cupon-wrapper" />
            
          </div>
          <div className="image-wrapper">
            <img src={cupon2} alt="Coupon 2" className="cupon-wrapper"/>
          
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="category-images">
          <div className="image-wrapper">
            <img src={women19} alt="Category 1" />
            <h5><strong>Casual Wear</strong></h5>
           
          </div>
          <div className="image-wrapper">
            <img src={women20} alt="Category 2" />
           
            <h5><strong>Formal Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women21} alt="Category 3" />
            
            <h5><strong>Sports Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women22} alt="Category 4" />
          
             <h5><strong>Footwear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women23} alt="Category 5" />
       
            <h5><strong>Accessories</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={women24} alt="Category 6" />
          
            <h5><strong>Winter Wear</strong></h5>

          </div>
          <div className="image-wrapper">
            <img src={women25} alt="Category 7" />
            <h5><strong>Night Wear</strong></h5>
           
          </div>
          <div className="image-wrapper">
            <img src={women26} alt="Category 8" />
            <h5><strong>Ethnic Wear</strong></h5>
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

export default Women;
