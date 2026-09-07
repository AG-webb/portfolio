import ContactItem from "@/components/contatc/ContactItem";
import Section from "@/components/ui/Section";
import "./style.css";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="experience"
      subtitle="Get in touch"
      title="Let’s build something together"
    >
      <div className="contact__list grid lg:grid-cols-3 gap-3 md:gap-6">
        <ContactItem icon="phone" title="Phone" value="+37496004010" />
        <ContactItem
          icon="mail"
          title="Email"
          value="arikgevorgyan23@gmail.com"
        />
        <ContactItem icon="map-pin" title="Location" value="Armenia, Yerevan" />
      </div>
    </Section>
  );
};

export default Contact;
