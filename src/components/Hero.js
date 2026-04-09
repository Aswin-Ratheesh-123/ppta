import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {

    const phoneNumber = "918921342411"; // 👉 replace with your number

    /* ✅ COMMON WHATSAPP FUNCTION */
    const openWhatsApp = (text) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    /* COURSES DATA */
    const courses = [
        {
            title: "ACCA",
            icon: "📘",
            desc: "Globally recognized accounting certification with high career opportunities."
        },
        {
            title: "CMA",
            icon: "📊",
            desc: "Master management accounting and financial strategy skills."
        },
        {
            title: "Taxation",
            icon: "💰",
            desc: "Learn GST, Income Tax and practical filing skills."
        },
        {
            title: "Finance",
            icon: "📈",
            desc: "Build strong financial analysis and investment knowledge."
        }
    ];

    /* SERVICES DATA */
    const services = [
        {
            title: "Tax Services",
            icon: "🧾",
            desc: "GST registration, return filing, income tax consulting and compliance."
        },
        {
            title: "Finance Consulting",
            icon: "💼",
            desc: "Business financial planning, analysis, and investment strategies."
        },
        {
            title: "IT Services",
            icon: "💻",
            desc: "Web development, software solutions, and digital transformation."
        }
    ];

    return (
        <>

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">

                    <h1>
                        Perfect Professional <span>Training Academy</span>
                    </h1>

                    <p>
                        Build your career in <strong>Finance, Taxation, CMA & ACCA</strong> with industry-level training.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/courses">
                            <button className="primary-btn">
                                Explore Courses
                            </button>
                        </Link>

                        <button
                            className="secondary-btn"
                            onClick={() =>
                                openWhatsApp("Hello, I would like to know more about your courses and services.")
                            }
                        >
                            💬 Contact Us
                        </button>

                    </div>

                </div>
            </section>

            {/* COURSES PREVIEW */}
            <section className="courses-preview">

                <h2>Our Popular Courses</h2>
                <p className="courses-subtitle">
                    Professional courses designed to boost your career
                </p>

                <div className="courses-container">

                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>

                            <div className="course-icon">{course.icon}</div>

                            <h3>{course.title}</h3>
                            <p>{course.desc}</p>

                            <button
                                className="course-btn"
                                onClick={() =>
                                    openWhatsApp(
                                        `Hello, I am interested in the ${course.title} course. Please share more details.`
                                    )
                                }
                            >
                                💬 Know More
                            </button>

                        </div>
                    ))}

                </div>

                <div className="view-all">
                    <Link to="/courses">
                        <button>Explore All Courses →</button>
                    </Link>
                </div>

            </section>

            {/* SERVICES PREVIEW */}
            <section className="services-preview">

                <h2>Our Services</h2>
                <p className="services-subtitle">
                    Professional services to support your business growth
                </p>

                <div className="services-container">

                    {services.map((service, index) => (
                        <div className="service-card" key={index}>

                            <div className="service-icon">{service.icon}</div>

                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>

                            <button
                                className="service-btn"
                                onClick={() =>
                                    openWhatsApp(
                                        `Hello, I am interested in ${service.title}. Please provide more details.`
                                    )
                                }
                            >
                                💬 Know More
                            </button>

                        </div>
                    ))}

                </div>

                <div className="view-all">
                    <Link to="/services">
                        <button>Explore All Services →</button>
                    </Link>
                </div>

            </section>

        </>
    );
}

export default Hero;