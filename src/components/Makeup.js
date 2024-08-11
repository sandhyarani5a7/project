import React from 'react';

import makeup1 from '../assets/makeup12.jpg'; 
import makeup2 from '../assets/makeup13.jpg';
import makeup3 from '../assets/makeup14.jpg';
import makeup4 from '../assets/makeup15.jpg';
import makeup5 from '../assets/makeup16.jpg';
import cupon1 from '../assets/cupon1.png';
import cupon2 from '../assets/cupons2.avif';
import product1 from '../assets/makeup1.jpg';
import product2 from '../assets/makeup2.jpg';
import product3 from '../assets/makeup3.png';
import product4 from '../assets/makeup4.jpg';
import product5 from '../assets/makeup5.png';
import product6 from '../assets/makeup6.jpg';
import product7 from '../assets/makeup7.png';
import product8 from '../assets/makeup8.jpg';
import product9 from '../assets/makeup9.jpg';
import product10 from '../assets/makeup10.jpg';
import makeup18 from '../assets/makeup18.jpg'; 
import makeup19 from '../assets/makeup19.jpg';
import makeup21 from '../assets/makeup21.jpg';
import makeup22 from '../assets/makeup22.jpg';
import makeup23 from '../assets/makeup23.jpg';
import makeup24 from '../assets/makeup24.jpg'; 
import makeup25 from '../assets/makeup25.jpg';
import makeup26 from '../assets/makeup26.jpg';



const Makeup = ({ addToCart }) => {
  
    
const products = [
    { id: 1, image: product1, name: 'Lipstick', sizes: ['Standard'], colors: ['Red', 'Pink', 'Nude'], cost: '₹400' },
    { id: 2, image: product2, name: 'Foundation', sizes: ['30ml', '50ml'], colors: ['Light', 'Medium', 'Dark'], cost: '₹1200' },
    { id: 3, image: product3, name: 'Eyeliner', sizes: ['Standard'], colors: ['Black', 'Brown'], cost: '₹300' },
    { id: 4, image: product4, name: 'Blush', sizes: ['Standard'], colors: ['Peach', 'Rose', 'Coral'], cost: '₹500' },
    { id: 5, image: product5, name: 'Mascara', sizes: ['Standard'], colors: ['Black'], cost: '₹600' },
    { id: 6, image: product6, name: 'Concealer', sizes: ['5ml', '10ml'], colors: ['Light', 'Medium', 'Dark'], cost: '₹700' },
    { id: 7, image: product7, name: 'Highlighter', sizes: ['Standard'], colors: ['Gold', 'Champagne'], cost: '₹800' },
    { id: 8, image: product8, name: 'Eyeshadow Palette', sizes: ['Standard'], colors: ['Nude', 'Smokey', 'Bright'], cost: '₹1500' },
    { id: 9, image: product9, name: 'Lip Gloss', sizes: ['Standard'], colors: ['Clear', 'Pink', 'Red'], cost: '₹350' },
    { id: 10, image: product10, name: 'Setting Spray', sizes: ['100ml', '200ml'], colors: [], cost: '₹500' }
];


  

    return (
        <div className="makeup-page">
            {/* Brands Section */}
            <div className="brands-section">
                <h2>Brands</h2>
                <div className="brand-images">
                    <div className="image-wrapper">
                        <img src={makeup1} alt="Brand 1" />
                        <h5><strong>Maybelline</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup2} alt="Brand 2" />
                        <h5><strong>L'Oréal</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup3} alt="Brand 3" />
                        <h5><strong>MAC</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup4} alt="Brand 4" />
                        <h5><strong>Revlon</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup5} alt="Brand 5" />
                        <h5><strong>Nyx</strong></h5>
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
                        <img src={makeup18} alt="Category 1" />
                        <h5><strong>Lip Products</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup19} alt="Category 2" />
                        <h5><strong>Face Makeup</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup21} alt="Category 3" />
                        <h5><strong>Eye Makeup</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup22} alt="Category 4" />
                        <h5><strong>Blushes</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup23} alt="Category 5" />
                        <h5><strong>Mascaras</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup24} alt="Category 6" />
                        <h5><strong>Concealers</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup25} alt="Category 7" />
                        <h5><strong>Highlighters</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={makeup26} alt="Category 8" />
                        <h5><strong>Eyeshadow Palettes</strong></h5>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="products-section">
                <h2>Products</h2>
                <div className="product-images">
                    {products.map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} className="product-image" />
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

export default Makeup;
