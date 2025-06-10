import '../css/portfolio.css';
import PortfolioArticle from '../components/PortfolioArticle';
import PropertyListing from '../components/PropertyListing';
import { useState, useEffect } from 'react';

const Portfolio = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const sampleListings = [
            {
                _id: "1",
                title: "Luxury Downtown Condo",
                property_type: "Condo",
                price: "$850,000",
                address: "123 Main Street, Downtown",
                bedrooms: 2,
                bathrooms: 2,
                square_feet: 1200,
                year_built: 2020,
                features: ["Balcony", "Gym", "Pool", "Parking"],
                img_name: "images/Luxury Downtown Condo.jpg",
                description: "Stunning downtown condo with modern amenities and city views."
            },
            {
                _id: "2",
                title: "Suburban Family Home",
                property_type: "Single Family",
                price: "$650,000",
                address: "456 Oak Avenue, Suburbs",
                bedrooms: 4,
                bathrooms: 3,
                square_feet: 2800,
                year_built: 2018,
                features: ["Backyard", "Garage", "Fireplace", "Updated Kitchen"],
                img_name: "images/Suburban Family Home.jpeg",
                description: "Perfect family home in a quiet suburban neighborhood."
            },
            {
                _id: "3",
                title: "Waterfront Estate",
                property_type: "Luxury",
                price: "$2,500,000",
                address: "789 Harbor Drive, Waterfront",
                bedrooms: 5,
                bathrooms: 4,
                square_feet: 4500,
                year_built: 2022,
                features: ["Private Dock", "Pool", "Wine Cellar", "Chef's Kitchen"],
                img_name: "images/Waterfront Estate.jpg",
                description: "Exclusive waterfront estate with breathtaking views."
            }
        ];
        
        setListings(sampleListings);
    }, []);

    return (
        <main>
            <div className="container">
                <section className="news-content">
                    <div className="news-header">
                        <h1>Our Portfolio</h1>
                        <p>Explore our diverse range of real estate projects, from luxury residential properties to 
                            commercial developments. Each project represents our commitment to quality, 
                            innovation, and client satisfaction.</p>
                    </div>
                    
                    <div className="portfolio-grid">
                        <PortfolioArticle 
                            image="images/Downtown Office Complex.jpg"
                            alt="Commercial Development"
                            category="Commercial"
                            title="Downtown Office Complex"
                            description="A state-of-the-art office complex featuring modern amenities, sustainable design, and flexible workspaces. This project showcases our expertise in commercial real estate development."
                            linkTo="/news"
                            linkText="View Details"
                        />
                        <PortfolioArticle 
                            image="images/Luxury Apartment Complex.jpg"
                            alt="Residential Development"
                            category="Residential"
                            title="Luxury Apartment Complex"
                            description="An upscale residential development offering premium living spaces with panoramic views, community amenities, and sustainable features. Perfect for modern urban living."
                            linkTo="/about"
                            linkText="Learn More"
                        />
                    </div>
                    <div id="spacer"></div>
                    
                    <div className="news-header">
                        <h1>Featured Listings</h1>
                        <p>Explore our current selection of premium properties available for purchase or lease.</p>
                    </div>
                    <div className="portfolio-grid" id="the-listings">
                        {listings.map((property) => (
                            <PropertyListing key={property._id} property={property} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Portfolio;
