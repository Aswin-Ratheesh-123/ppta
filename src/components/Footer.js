import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* BRAND */}
                <div className="footer-section">
                    <h2>PPTA</h2>
                    <p>
                        Perfect Professional Training Academy providing quality education in
                        Finance, Taxation, CMA, ACCA and IT services.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/courses">Courses</a>
                    <a href="/services">Services</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>

                {/* COURSES */}
                <div className="footer-section">
                    <h3>Courses</h3>
                    <p>ACCA</p>
                    <p>CMA</p>
                    <p>Taxation</p>
                    <p>Finance</p>
                </div>

                {/* CONTACT */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@ppta.com</p>
                    <p>Phone: +91 XXXXX XXXXX</p>
                    <p>Kerala, India</p>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>© 2026 PPTA. All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;