function CourseCard({ title, desc, icon }) {

    const phoneNumber = "918921342411";

    const message = `Hello, I am interested in the ${title} course. Please share more details.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="course-card">

            {/* ✅ ICON ADDED */}
            <div className="course-icon">{icon}</div>

            <h3>{title}</h3>
            <p>{desc}</p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="course-btn">
                    💬 Know More
                </button>
            </a>

        </div>
    );
}

export default CourseCard;