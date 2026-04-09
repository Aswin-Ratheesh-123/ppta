import ServiceCard from "../components/ServiceCard";
import "../styles/Services.css";

function Services() {
    return (
        <section className="services-page">

            <h1>Our Services</h1>
            <p className="services-subtitle">
                Professional solutions tailored for individuals and businesses
            </p>

            <div className="services-grid">

                <ServiceCard icon="🧾" title="Tax Services" desc="GST registration, filing, income tax returns and compliance." />
                <ServiceCard icon="📊" title="Finance Consulting" desc="Business financial planning and advisory services." />
                <ServiceCard icon="💻" title="IT Services" desc="Web development, software solutions and digital services." />

                <ServiceCard icon="📚" title="Accounting Services" desc="Bookkeeping, financial statements and reporting." />
                <ServiceCard icon="🔍" title="Audit & Assurance" desc="Internal and external audit support services." />
                <ServiceCard icon="👨‍💼" title="Payroll Management" desc="Employee salary processing and compliance." />

                <ServiceCard icon="📄" title="Business Registration" desc="Company registration, GST, MSME and licensing." />
                <ServiceCard icon="📈" title="Investment Advisory" desc="Smart investment planning and portfolio management." />
                <ServiceCard icon="📢" title="Digital Marketing" desc="SEO, social media and online brand growth." />

            </div>

        </section>
    );
}

export default Services;