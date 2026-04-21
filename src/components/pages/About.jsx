import React from "react";
import Container from "../Container";
import AboutOne from "../../assets/aboutOne.jpg";
import AboutTwo from "../../assets/aboutTwo.jpg";

const About = () => {
  return (
    <>
      <div className="py-10 ">
        <Container>

          {/* Header */}
          <div className="text-center mb-12 mx-3 lg:mx-0">
            <h5 className="text-4xl font-bold uppercase">About Prime Store</h5>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Discover who we are, what we stand for, and how we bring you the best shopping experience every day.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 mx-3 lg:mx-0">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
              src={AboutOne}
              alt="About Prime Store"
            />
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mb-20 mx-3 lg:mx-auto">
            <h6 className="text-3xl font-semibold mb-6">Our Story</h6>
            <p className="text-gray-700 leading-7">
              <span className="font-medium">
                Prime Store started with a simple idea — to make quality products accessible, affordable, and trustworthy for everyone.
              </span>
              <br />
              <br />
              What began as a small online shop has grown into a reliable e-commerce platform serving customers with a wide range of products. 
              We believe in quality over quantity, customer satisfaction over quick sales, and building long-term relationships instead of one-time transactions.
            </p>
          </div>

          {/* Mission / Vision / Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-3 lg:mx-0">

            <div className="space-y-8">

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-semibold mb-3">Our Mission</h6>
                <p className="text-gray-600">
                  To provide high-quality products at competitive prices while delivering a seamless and enjoyable shopping experience for every customer.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-semibold mb-3">Our Vision</h6>
                <p className="text-gray-600">
                  To become one of the most trusted and customer-focused e-commerce platforms, known for innovation, reliability, and service excellence.
                </p>
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-semibold mb-3">The Company</h6>
                <p className="text-gray-600">
                  Prime Store is dedicated to bringing you the latest products across multiple categories. We continuously improve our platform to ensure fast delivery, secure payments, and top-notch customer support.
                </p>
              </div>

            </div>

            {/* Side Image */}
            <div>
              <img
                className="w-full h-[450px] object-cover rounded-xl shadow-md"
                src={AboutTwo}
                alt="Company"
              />
            </div>

          </div>

        </Container>
      </div>
    </>
  );
};

export default About;