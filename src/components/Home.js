import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import MenOne from '../assets/MenOne.jpeg';
import MenTwo from '../assets/MenTwo.jpeg';
import WomenOne from '../assets/WomenOne.jpeg';
import WomenTwo from '../assets/WomenTwo.jpeg';
import kidstwo from '../assets/kidstwo.jpg';
import KidOne from '../assets/KidOne.jpg';
import MakeupOne from '../assets/MakeupOne.jpg';
import JewelleryOne from '../assets/jewelleryOne.jpg';


const categories = [
  {
    name: 'Men',
    image: MenOne,  
    description: 'Explore our collection of men\'s fashion.'
  },
  {
    name: 'Women',
    image: WomenOne,  
    description: 'Discover the latest trends in women\'s fashion.'
  },
  {
    name: 'Kids',
    image: KidOne, 
    description: 'Shop for kids\' clothing and accessories.'
  },
  {
    name: 'Makeup',
    image: MakeupOne,
    description: 'Find the best makeup products.'
  },
  {
    name: 'Jewellery',
    image: JewelleryOne, 
    description: 'Elegant jewellery for every occasion.'
  }
];

const Home = () => {
  return (
    <div className="home-container">
    

      {/* Carousel Section */}
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src={MenTwo} alt="Men Collection" />
          <p className="legend">Men Collection</p>
        </div>
        <div>
          <img src={WomenTwo} alt="Women Collection" />
          <p className="legend">Women Collection</p>
        </div>
        <div>
          <img src={kidstwo} alt="Kids Collection" />
          <p className="legend">Kids Collection</p>
        </div>
        <div>
          <img src={MakeupOne} alt="Makeup Collection" />
          <p className="legend">Makeup Collection</p>
        </div>
        <div>
          <img src={JewelleryOne} alt="Jewellery Collection" />
          <p className="legend">Jewellery Collection</p>
        </div>
      </Carousel>

      {/* Categories Section */}
      <div className="category-list">
        <h2>Categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <Link to={`/${category.name.toLowerCase()}`}>
                <img src={category.image} alt={category.name}/>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
