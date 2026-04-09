import "../styles/Contact.css";

function Contact() {

  const phoneNumber = "919XXXXXXXXX";

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Hello PPTA,
Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact">

      <div className="contact-container">

        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Get in touch with us for courses or services
        </p>

        <div className="contact-content">

          {/* FORM (WHATSAPP) */}
          <form className="contact-form" onSubmit={handleWhatsApp}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5"></textarea>

            <button type="submit">
              💬 Send via WhatsApp
            </button>
          </form>

          {/* INFO */}
          <div className="contact-info">

            <h3>Contact Details</h3>

            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:info@ppta.com">info@ppta.com</a>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <a href="tel:+919XXXXXXXXX">+91 XXXXX XXXXX</a>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <p>Kerala, India</p>
            </div>

            <div className="contact-item">
              <span>💬</span>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;