import { useState, useEffect } from 'react';
import "../css/slideshow.css";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        "images/Eco-Friendly Home.jpeg",
        "images/Luxury Apartment Complex.jpg",
        "images/Luxury Downtown Condo.jpg",
        "images/being built.jpg",
        "images/Investment Property.webp",
        "images/buildings.jpg",
        "images/Downtown Office Complex.jpg",
        "images/Luxury Penthouse.jpg",
        "images/Modern Office Space.webp",
        "images/Suburban Family Home.jpeg",
        "images/Waterfront Estate.jpg",
        "images/Urban Loft.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="slideshow-container">
            <section id="slideshow">
                {slides.map((slide, index) => (
                    <img 
                        key={index}
                        src={slide} 
                        alt={`Property ${index + 1}`}
                        className={index === currentSlide ? '' : 'hidden'}
                    />
                ))}
            </section>
        </div>
    );
};

export default Slideshow; 