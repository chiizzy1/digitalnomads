import Hero from "@/components/Hero";
import Cards from "@/components/contact/Cards";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="relative min-h-screen">
      <Hero title="Contact Us" />

      <Cards />
      <ContactForm />
    </main>
  );
}
