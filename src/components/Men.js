import React from 'react';
import men3 from '../assets/men3.jpg'; 
import men4 from '../assets/men4.jpg';
import men5 from '../assets/men5.jpg';
import men6 from '../assets/men6.jpg';
import men7 from '../assets/men7.jpg';
import men8 from '../assets/men8.png';
import men9 from '../assets/men9.jpg';
import men10 from '../assets/men10.jpeg'; 
import men11 from '../assets/men11.jpg';
import men12 from '../assets/men12.jpg'; 
import men13 from '../assets/men13.jpeg';
import men14 from '../assets/men14.png'; 
import men20 from '../assets/men20.jpg';
import men16 from '../assets/men16.jpg'; 
import men17 from '../assets/men17.jpg';
import cupon1 from '../assets/cupon1.png';
import cupon2 from '../assets/cupons2.avif';
import men21 from '../assets/men21.jpg'; 
import men22 from '../assets/men22.avif';
import men23 from '../assets/men23.jpg'; 
import men24 from '../assets/men24.jpg';
import men25 from '../assets/men25.jpg'; 
import men26 from '../assets/men26.jpg';
import men27 from '../assets/men27.jpeg'; 
import men28 from '../assets/men28.png';
import men29 from '../assets/men29.jpg';

const Men = ({ addToCart }) => {

  // Define an array of product objects with details
  const products = [
    { id: 1, image: men21, name: 'T-Shirt', sizes: ['S', 'M', 'L'], colors: ['Red', 'Blue'], cost: '₹500' },
    { id: 2, image: men22, name: 'Jeans', sizes: ['M', 'L', 'XL'], colors: ['Black', 'Blue'], cost: '₹1500' },
    { id: 3, image: men23, name: 'Jacket', sizes: ['S', 'M', 'L', 'XL'], colors: ['Brown', 'Black'], cost: '₹2500' },
    { id: 4, image: men24, name: 'Sweater', sizes: ['S', 'M', 'L'], colors: ['Grey', 'Blue'], cost: '₹1200' },
    { id: 5, image: men25, name: 'Shorts', sizes: ['M', 'L', 'XL'], colors: ['Green', 'Navy'], cost: '₹800' },
    { id: 6, image: men29, name: 'Shirt', sizes: ['S', 'M', 'L', 'XL'], colors: ['White', 'Black'], cost: '₹600' },
    { id: 7, image: men26, name: 'Suit', sizes: ['M', 'L', 'XL'], colors: ['Charcoal', 'Navy'], cost: '₹5000' },
    { id: 8, image: men27, name: 'Blazer', sizes: ['M', 'L'], colors: ['Brown', 'Black'], cost: '₹3500' },
    { id: 9, image: men11, name: 'Cargo Pants', sizes: ['M', 'L', 'XL'], colors: ['Olive', 'Beige'], cost: '₹1000' },
    { id: 10, image: men28, name: 'Track Pants', sizes: ['M', 'L', 'XL'], colors: ['Black', 'Grey'], cost: '₹900' }
  ];

  return (
    <div className="men-page">
      {/* Brands Section */}
      <div className="brands-section">
        <h2>Brands</h2>
        <div className="brand-images">
          <div className="image-wrapper">
            <img src={men3} alt="Brand 1" />
            <h5><strong>Wrangler</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men4} alt="Brand 2" />
            <h5><strong>Puma</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men5} alt="Brand 3" />
            <h5><strong>Adidas</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men6} alt="Brand 4" />
            <h5><strong>Crocs</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men7} alt="Brand 5" />
            <h5><strong>WoodLand</strong></h5>
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="coupons-section">
        <h2>Coupons</h2>
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
            <img src={men10} alt="Category 1" />
            <h5><strong>Casual Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men11} alt="Category 2" />
            <h5><strong>Formal Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men12} alt="Category 3" />
            <h5><strong>Sports Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men13} alt="Category 4" />
            <h5><strong>Footwear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men14} alt="Category 5" />
            <h5><strong>Accessories</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men20} alt="Category 6" />
            <h5><strong>Winter Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men16} alt="Category 7" />
            <h5><strong>Night Wear</strong></h5>
          </div>
          <div className="image-wrapper">
            <img src={men17} alt="Category 8" />
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

export default Men;
