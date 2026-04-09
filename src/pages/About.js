import "../styles/About.css";

function About() {
    return (
        <section className="about">

            <div className="about-container">

                <div className="about-text">
                    <h2>About PPTA</h2>

                    <p>
                        <strong>Perfect Professional Training Academy (PPTA)</strong> is a
                        leading institute dedicated to providing high-quality training in
                        Finance, Taxation, CMA, and ACCA.
                    </p>

                    <p>
                        Our mission is to equip students and professionals with practical
                        knowledge and industry-relevant skills to excel in their careers.
                    </p>

                    <p>
                        Along with professional courses, we also offer expert services in
                        taxation, financial consulting, and IT solutions to support
                        businesses and individuals.
                    </p>

                </div>

                <div className="about-cards">

                    <div className="about-card">
                        <h3>🎯 Our Mission</h3>
                        <p>Empowering careers through practical and professional education.</p>
                    </div>

                    <div className="about-card">
                        <h3>🚀 Our Vision</h3>
                        <p>To become a leading professional training and service provider.</p>
                    </div>

                    <div className="about-card">
                        <h3>💼 Our Expertise</h3>
                        <p>Finance, Taxation, Accounting, and IT Services.</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;