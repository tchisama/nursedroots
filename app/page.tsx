"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "@/public/Hero.png";
import logo from "@/public/logo.svg";

export default function BeautySalon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Client Name 1",
    },
    {
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      name: "Client Name 2",
    },
    {
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
      name: "Client Name 3",
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const nextReview = () =>
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center h-[100px] justify-between p-4 border-b">
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            About Me
          </a>
        </nav>
        <div className="flex-1 flex justify-center">
          <Image
            src={logo}
            alt="Nourished Roots Logo"
            width={70}
            height={70}
            className="w-18 drop-shadow-md h-18 absolute top-3 left-1/2 transform -translate-x-1/2 "
          />
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Shop
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Me
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        className="text-center space-y-6  px-[30px] 
      bg-gradient-to-b from-white to-primary/30"
      >
        <h1 className="text-4xl font-bold mt-10 text-primary">
          Revive, Refresh, Radiate
        </h1>
        <p className="text-xl text-gray-600">Welcome to Nourised Roots</p>
        <Button variant="default" size={"lg"} className=" text-lg">
          Book Now
        </Button>
        <div className="mt-8">
          <Image
            src={Hero}
            alt="Hero Image"
            width={700}
            height={1000}
            className="w-full "
          />
        </div>
      </section>
      <main className="container max-w-md mx-auto px-4 py-8 space-y-24">
        {/* Services */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Our Services
          </h2>
          {[1, 2, 3].map((service) => (
            <div key={service} className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt="Service Image"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-800">
                    $450
                  </span>
                  <Button variant="outline" className="rounded-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Reviews Carousel */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Our Clients Reviews
          </h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              {reviews[currentReview].text}
            </p>
            <p className="font-medium">{reviews[currentReview].name}</p>
            <div className="flex justify-between items-center">
              <Button variant="ghost" onClick={prevReview}>
                &larr; Previous
              </Button>
              <div className="flex justify-center gap-2">
                {reviews.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentReview ? "bg-blue-500" : "bg-blue-200"
                    }`}
                  />
                ))}
              </div>
              <Button variant="ghost" onClick={nextReview}>
                Next &rarr;
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            About me
          </h2>
          <Image
            src="/placeholder.svg"
            alt="About Image"
            width={400}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button variant="link" className="text-blue-500 p-0">
            Read More
          </Button>
        </section>

        {/* Q&A */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Q and A
          </h2>
          <Accordion type="single" collapsible>
            {[1, 2].map((item) => (
              <AccordionItem key={item} value={`item-${item}`}>
                <AccordionTrigger className="text-sm">
                  Question {item}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Extended Footer */}
      <footer className="bg-blue-50 py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <Image
                src={logo}
                alt="Nourished Roots Logo"
                width={40}
                height={40}
                className="w-24 h-24 mx-auto md:mx-0 mb-4"
              />
              <p className="text-sm max-w-[400px] mx-auto text-center text-gray-600">
                Revive, Refresh, Radiate with Nourished Roots. Your journey to
                beauty and wellness starts here.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                Quick Links
              </h3>
              <nav className="flex flex-col items-center md:items-start space-y-2">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  About Me
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Contact
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                Contact Us
              </h3>
              <address className="text-sm text-gray-600 text-center md:text-left not-italic">
                123 Beauty Lane
                <br />
                Glamour City, ST 12345
                <br />
                Phone: (123) 456-7890
                <br />
                Email: info@nourishedroots.com
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-100 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2024 Nourished Roots. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
