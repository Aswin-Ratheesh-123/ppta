import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";

function Courses() {
  return (
    <section className="courses-page">

      <h1>Our Courses</h1>
      <p className="courses-subtitle">
        Explore a wide range of professional courses designed for your career growth
      </p>

      <div className="courses-grid">

        <CourseCard title="ACCA" icon="📘" desc="Global accounting certification with international recognition." />
        <CourseCard title="CMA" icon="📊" desc="Certified Management Accountant for strategic finance roles." />
        <CourseCard title="Taxation" icon="💰" desc="GST, Income Tax, and practical filing training." />
        <CourseCard title="Finance" icon="📈" desc="Financial analysis, investment, and business finance." />

        <CourseCard title="Tally with GST" icon="🧾" desc="Complete accounting software training with GST integration." />
        <CourseCard title="Financial Modeling" icon="📉" desc="Learn Excel-based financial modeling for real business cases." />
        <CourseCard title="Auditing" icon="🔍" desc="Internal and external auditing concepts with practical exposure." />
        <CourseCard title="Business Analytics" icon="📊" desc="Data-driven decision making using modern tools." />

        <CourseCard title="Banking & Finance" icon="🏦" desc="Career-focused training for banking and financial sectors." />
        <CourseCard title="GST Practitioner Course" icon="📄" desc="Become a certified GST practitioner with hands-on training." />
        <CourseCard title="Income Tax Practitioner" icon="💼" desc="Advanced income tax return filing and compliance." />
        <CourseCard title="Corporate Finance" icon="🏢" desc="Understand corporate financial strategies and management." />

      </div>

    </section>
  );
}

export default Courses;