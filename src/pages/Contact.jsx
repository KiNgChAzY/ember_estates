import '../css/contact.css';
import ContactArticle from '../components/ContactArticle';
import ContactForm from '../components/ContactForm';
import Slideshow from '../components/Slideshow';

const Contact = () => {
    return (
        <main>
            <div className="container">
                <section className="contact-content">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Our Office</h3>
                            <div className="info-item">
                                <h4>Address</h4>
                                <p>124 Conch Street<br />Hilton Head Island, SC 12345</p>
                            </div>
                            <div className="info-item">
                                <h4>Phone</h4>
                                <p>(777) 123-4567</p>
                            </div>
                            <div className="info-item">
                                <h4>Email</h4>
                                <p>theember.sc@gmail.com</p>
                            </div>
                            <div className="info-item">
                                <h4>Office Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed
                                </p>
                            </div>
                        </div>
                        <ContactForm />
                    </div>

                    <Slideshow />

                    <div className="news-grid">
                        <ContactArticle 
                            image="images/us.jpg"
                            alt="About Our Team"
                            category="Our Team"
                            title="Meet Our Experts"
                            description="Our team of experienced real estate professionals is dedicated to providing exceptional service. From property management to investment consulting, we're here to help you achieve your real estate goals."
                            linkTo="/about"
                            linkText="Learn More"
                        />
                        <ContactArticle 
                            image="images/buildings.jpg"
                            alt="Our Properties"
                            category="Properties"
                            title="Featured Listings"
                            description="Explore our selection of premium properties, from luxury homes to commercial spaces. Each listing represents our commitment to quality and excellence in real estate."
                            linkTo="/portfolio"
                            linkText="View Properties"
                        />
                        <ContactArticle 
                            image="images/work.jpg"
                            alt="Market Insights"
                            category="Market Update"
                            title="Latest Market Trends"
                            description="Stay informed about the latest developments in the real estate market. Our expert analysis and insights help you make informed decisions about your property investments."
                            linkTo="/news"
                            linkText="Read More"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Contact;
