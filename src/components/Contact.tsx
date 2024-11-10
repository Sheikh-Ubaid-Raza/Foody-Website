export default function Contact() {
    return (
      <section id="contact" className="contact">
        <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Location: 123 Fast Lane, Food City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@foodyresturant.com</p>
        </div>

        <div className="copyright-container">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      </section>
    );
  }