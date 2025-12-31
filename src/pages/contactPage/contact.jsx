import ContactCard from "../../components/contactCard";
import ProfilesSection from "../../components/profilesSection";

const Contact = () => {
  const { contactCard, profilesCard } = contactData;
  return (
    <div className="mt-6 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <ContactCard />
        <ProfilesSection />
      </div>
    </div>
  );
};

export default Contact;
