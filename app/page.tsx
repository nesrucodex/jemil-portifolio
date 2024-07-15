import ContactForm from "@/components/custom/contact-form";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import Services from "@/components/custom/services";
import Testimonials from "@/components/custom/testimonials";

const Page = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Page;
