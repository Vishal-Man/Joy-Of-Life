import ContactInfo from './ContactInfo.jsx';
import FeedbackForm from './FeedbackForm.jsx';
import bg from '../assets/pic1.jpg';

export default function Footer() {
  return (
    <footer id="contact" className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__inner">
        <ContactInfo />
        <FeedbackForm />
      </div>
    </footer>
  );
}
