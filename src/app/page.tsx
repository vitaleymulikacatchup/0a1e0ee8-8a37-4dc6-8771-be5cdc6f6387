"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Linkedin, Twitter } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "#about" },
            { name: "Services", id: "#services" },
            { name: "Contact", id: "#contact" }
          ]}
          brandName="IT Company"
          buttonText="Join Now"
          buttonVariant="icon-arrow"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Innovate with Us"
            description="Delivering cutting-edge IT solutions tailored for your business."
            imageSrc="https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="modern office workspace - Photo by Jakub Zerdzicki"
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
            imagePosition="left"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["At IT Company, we strive to deliver the highest quality tech services.", "Our mission is to empower businesses with innovative solutions."]}
            buttons={[{ text: "Our Services", href: "services" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              {
                title: "Custom Software Development",
                description: "Build software tailored to your needs.",
                imageSrc: "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                title: "IT Consulting",
                description: "Expert advice to navigate the tech world.",
                imageSrc: "/public/images/placeholder.webp"
              }
            ]}
            title="Our Services"
            description="Explore our comprehensive range of services."
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[
              {
                id: "1",
                name: "John Doe",
                role: "CEO",
                description: "Leading the way in tech innovation.",
                imageSrc: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
              },
              {
                id: "2",
                name: "Jane Smith",
                role: "CTO",
                description: "Innovating at the intersection of technology and business.",
                imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                socialLinks: [{ icon: Twitter, url: "https://twitter.com" }]
              }
            ]}
            title="Meet Our Team"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              {
                id: "1",
                name: "Alisa Hester",
                role: "Project Manager",
                testimonial: "The attention to detail and commitment to excellence was outstanding.",
                imageSrc: "https://images.pexels.com/photos/10376007/pexels-photo-10376007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                id: "2",
                name: "Michael Brown",
                role: "Tech Lead",
                testimonial: "A truly professional experience from start to finish.",
                imageSrc: "https://images.pexels.com/photos/6205542/pexels-photo-6205542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
            title="What Our Clients Say"
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            logos={[
              "/logos/company1.svg",
              "/logos/company2.svg",
              "/logos/company3.svg",
              "/logos/company4.svg",
              "/logos/company5.svg",
              "/logos/company6.svg"
            ]}
            title="Trusted by Industry Leaders"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="We're here to help your business grow."
            imageSrc="/public/images/placeholder.webp"
            inputPlaceholder="Your email address"
            buttonText="Submit"
            termsText="We respect your privacy. Unsubscribe at any time."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Product",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Careers", href: "careers" }
                ]
              },
              {
                title: "Support",
                items: [
                  { label: "Contact", href: "contact" },
                  { label: "Help Center", href: "help" }
                ]
              }
            ]}
            copyrightText="© 2025 IT Company"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}