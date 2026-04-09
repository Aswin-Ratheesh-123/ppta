function ServiceCard({ title, desc, icon }) {

    const phoneNumber = "919XXXXXXXXX";

    const message = `Hello, I am interested in ${title}. Please provide more details.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="service-card">

            {/* ✅ ICON */}
            <div className="service-icon">{icon}</div>

            <h3>{title}</h3>
            <p>{desc}</p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="service-btn">💬 Know More</button>
            </a>

        </div>
    );
}

export default ServiceCard;