
import { ContactHeader } from "./contact/ContactHeader";
import { ContactInfo } from "./contact/ContactInfo";
import { SocialLinks } from "./contact/SocialLinks";
import { ContactForm } from "./contact/ContactForm";
import { ContactFooter } from "./contact/ContactFooter";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/30">
      <div className="max-w-6xl mx-auto">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
          <ContactForm />
        </div>

        <ContactFooter />
      </div>
    </section>
  );
};
