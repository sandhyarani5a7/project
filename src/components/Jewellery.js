import React from 'react';

import brand1 from '../assets/brand1.jpg'; 
import brand2 from '../assets/brand2.jpg';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.jpg';
import brand5 from '../assets/brand5.jpg';
import cupon1 from '../assets/cupon1.png';
import cupon2 from '../assets/cupons2.avif';
import category1 from '../assets/category1.jpg'; 
import category2 from '../assets/category2.jpg';
import category3 from '../assets/category3.jpg'; 
import category4 from '../assets/category9.jpg';
import category5 from '../assets/category5.jpg'; 
import category6 from '../assets/category6.jpg';
import category7 from '../assets/category7.jpg'; 
import category8 from '../assets/category8.jpg';
import product1 from '../assets/product1.jpg'; 
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg'; 
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpeg'; 
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg'; 
import product8 from '../assets/product8.jpeg';
import product9 from '../assets/product9.jpg';
import product10 from '../assets/product10.jpg';

const Jewellery = ({ addToCart }) => {
  
    const products = [
        { id: 1, image: product1, name: 'Diamond Necklace', sizes: ['S', 'M', 'L'], colors: ['Gold', 'Silver'], cost: '₹15000' },
        { id: 2, image: product2, name: 'Gold Earrings', sizes: ['One Size'], colors: ['Gold'], cost: '₹8000' },
        { id: 3, image: product3, name: 'Silver Bracelet', sizes: ['M', 'L'], colors: ['Silver'], cost: '₹5000' },
        { id: 4, image: product4, name: 'Pearl Pendant', sizes: ['One Size'], colors: ['White'], cost: '₹7000' },
        { id: 5, image: product5, name: 'Ruby Ring', sizes: ['6', '7', '8'], colors: ['Red'], cost: '₹12000' },
        { id: 6, image: product6, name: 'Gold Chain', sizes: ['One Size'], colors: ['Gold'], cost: '₹10000' },
        { id: 7, image: product7, name: 'Emerald Earrings', sizes: ['One Size'], colors: ['Green'], cost: '₹9000' },
        { id: 8, image: product8, name: 'Platinum Bracelet', sizes: ['M', 'L'], colors: ['Platinum'], cost: '₹20000' },
        { id: 9, image: product9, name: 'Sapphire Pendant', sizes: ['One Size'], colors: ['Blue'], cost: '₹13000' },
        { id: 10, image: product10, name: 'Diamond Ring', sizes: ['6', '7', '8'], colors: ['Gold', 'Platinum'], cost: '₹25000' }
    ];

    

    return (
        <div className="jewellery-page">
            {/* Brands Section */}
            <div className="brands-section">
                <h2>Brands</h2>
                <div className="brand-images">
                    <div className="image-wrapper">
                        <img src={brand1} alt="Brand 1" />
                        <h5><strong>Tanishq</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={brand2} alt="Brand 2" />
                        <h5><strong>Kalyan Jewellers</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={brand3} alt="Brand 3" />
                        <h5><strong>Malabar Gold</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={brand4} alt="Brand 4" />
                        <h5><strong>PC Jeweller</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={brand5} alt="Brand 5" />
                        <h5><strong>Joyalukkas</strong></h5>
                    </div>
                </div>
            </div>

            {/* Coupons Section */}
            <div className="coupons-section">
                <h2>Coupons</h2>
                <div className="coupon-images">
                    <div className="image-wrapper">
                        <img src={cupon1} alt="Coupon 1" className="coupon-wrapper" />
                    </div>
                    <div className="image-wrapper">
                        <img src={cupon2} alt="Coupon 2" className="coupon-wrapper" />
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="categories-section">
                <h2>Categories</h2>
                <div className="category-images">
                    <div className="image-wrapper">
                        <img src={category1} alt="Category 1" />
                        <h5><strong>Necklaces</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category2} alt="Category 2" />
                        <h5><strong>Earrings</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category3} alt="Category 3" />
                        <h5><strong>Bracelets</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category4} alt="Category 4" />
                        <h5><strong>Pendants</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category5} alt="Category 5" />
                        <h5><strong>Rings</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category6} alt="Category 6" />
                        <h5><strong>Chains</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category7} alt="Category 7" />
                        <h5><strong>Bangels</strong></h5>
                    </div>
                    <div className="image-wrapper">
                        <img src={category8} alt="Category 8" />
                        <h5><strong>Anklets</strong></h5>
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

export default Jewellery;
