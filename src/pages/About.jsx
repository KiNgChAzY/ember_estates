import '../css/about.css';
import AboutArticle from '../components/AboutArticle';

const About = () => {
    return (
        <main>
            <div className="container">
                <section className="news-content">
                    <div className="news-header">
                        <h1>About Ember Estates</h1>
                        <p>Building dreams into reality since 2023, we are committed to excellence in real 
                            estate development and client satisfaction.</p>
                    </div>
                    
                    <div className="news-grid">
                        <AboutArticle 
                            image="images/ex.jpg"
                            alt="Our Mission"
                            category="Our Mission"
                            title="Excellence in Real Estate"
                            description="At Ember Estates, our mission is to transform the real estate landscape through innovative design, sustainable practices, and unwavering commitment to quality. We believe in creating spaces that inspire and communities that thrive."
                            linkTo="/portfolio"
                            linkText="View Our Work"
                        />
                        <AboutArticle 
                            image="images/sk.jpg"
                            alt="Our Team"
                            category="Our Team"
                            title="Expert Professionals"
                            description="Our team consists of experienced real estate professionals, architects, and designers who bring decades of combined expertise to every project. We pride ourselves on our collaborative approach and attention to detail."
                            linkTo="/contact"
                            linkText="Meet Our Team"
                        />
                        <AboutArticle 
                            image="images/being built.jpg"
                            alt="Our Values"
                            category="Our Values"
                            title="Integrity & Innovation"
                            description="We operate with the highest standards of integrity while embracing innovation in every aspect of our work. Our commitment to sustainability and community development guides our decision-making process."
                            linkTo="/news"
                            linkText="Learn More"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;