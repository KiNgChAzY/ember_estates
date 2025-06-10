import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section" id="footer-section-extra">
                    <h3 id="footer-section-h3">Contact Us</h3>
                    <p>Email: theember.sc@gmail.com</p>
                    <p>Phone: (777) 123-4567</p>
                </div>
                <div className="footer-bottom footer-section">
                    <p>&copy; 2023 Ember Estates</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;