import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import ContactHeading from '../Components/Contact/ContactHeading';
import ContactInfo from '../Components/Contact/ContactInfo';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHeading />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
