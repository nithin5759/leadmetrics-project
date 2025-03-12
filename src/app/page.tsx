"use client";

import Image from "next/image";
import { InputField, Button, Accordion } from "./components";
import {
  aboutData,
  clientsData,
  featuresData,
  offeringsData,
  principlesData,
  questionsData,
  serviceOptions,
  serviceOptionsData,
  navigationData,
} from "./constants";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface OfferingsDataItems {
  title: string;
  id: number;
}

interface AboutDataItems {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ServiceOptionsItems {
  id: number;
  option: string;
}

interface FeaturesDataItems {
  id: number;
  title: string;
  icon: string;
}

interface ServiceOptionsDataItems {
  id: number;
  title: string;
  icon: string;
  description: string;
  services: ServiceOptionsItems[];
}

interface ClientsDataItems {
  icon: string;
  id: number;
}

interface PrincipleDataItems {
  id: number;
  icon: string;
  title: string;
  description: string;
  background: string;
}
interface NavbarProps {
  title: string;
  id: number;
  name: string;
}

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [isPrimaryModalOpen, setIsPrimaryModalOpen] = useState(false);
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only numbers")
      .required("Phone number is required"),
    company: Yup.string().required("Company name is required"),
    requirements: Yup.string().required("Requirements are required"),
  });

  const optionSelectHandler = (option: number) => {
    setSelectedOption(option);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section
        id="contact"
        className="w-full flex justify-center bg-white px-4 py-5 md:py-10"
      >
        <div
          className="flex flex-col md:flex-row gap-4 max-w-7xl w-full bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${"/images/bg-hero.png"})` }}
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#272735] !leading-snug">
              <span className="text-[#6E3BFF]">AI Software</span>for <br />
              Digital Marketing <br />
              and Lead Generation
            </h1>
            <p className="text-[#2D2D44] mt-6 text-base">
              Our AI-powered software creates, executes, and optimizes custom
              digital marketing strategies to deliver high-quality results at
              minimal cost
            </p>
            <div className="w-full flex flex-col gap-2 mt-6">
              <h3 className="text-xl text-black md:text-2xl mb-2 font-medium">
                Our offerings include
              </h3>
              {offeringsData.map((options: OfferingsDataItems) => {
                return (
                  <div
                    key={options.id}
                    className="w-full flex gap-2 items-center"
                  >
                    <div className="bg-[#6E3BFF] w-2 h-2"></div>
                    <p className="text-black">{options.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                company: "",
                requirements: "",
              }}
              validationSchema={validationSchema}
              onSubmit={() => setIsPrimaryModalOpen(true)}
            >
              {({ handleChange, values, errors, touched, submitForm }) => (
                <Form className="bg-[#6E3BFF0D] rounded-xl w-full lg:max-w-md flex flex-col justify-between gap-4 p-8">
                  <p className="text-lg text-[#7b7b97] font-semibold">
                    Get a free consultation
                  </p>
                  <InputField
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isError={errors.name}
                    touched={touched.name}
                    helperText={touched.name ? errors.name : ""}
                    placeholder="Name"
                    variant="input"
                  />
                  <div className="flex gap-4 flex-col lg:flex-row">
                    <InputField
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isError={errors.email}
                      touched={touched.email}
                      helperText={touched.email ? errors.email : ""}
                      placeholder="Email"
                      variant="input"
                    />
                    <InputField
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      isError={errors.phone}
                      touched={touched.phone}
                      helperText={touched.phone ? errors.phone : ""}
                      placeholder="Mobile Number"
                      variant="input"
                    />
                  </div>
                  <InputField
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    isError={errors.company}
                    touched={touched.company}
                    helperText={touched.company ? errors.company : ""}
                    placeholder="Company"
                    variant="input"
                  />
                  <InputField
                    name="requirements"
                    value={values.requirements}
                    onChange={handleChange}
                    isError={errors.requirements}
                    touched={touched.requirements}
                    helperText={touched.requirements ? errors.requirements : ""}
                    placeholder="Submit Your Requirements"
                    variant="textarea"
                  />
                  <Button
                    value="Get Started"
                    variant="primary"
                    onClick={submitForm}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {isPrimaryModalOpen && (
          <div className="backdrop-blur-sm fixed inset-0 bg-[#00000050] flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg text-center relative w-full max-w-md">
              <Image
                src={"/images/close.png"}
                alt="close"
                height={28}
                width={28}
                className="h-7 w-7 absolute top-3.5 right-3.5 cursor-pointer"
                onClick={() => setIsPrimaryModalOpen(false)}
              />
              <h2 className="text-2xl font-semibold my-4 text-[#386bb7]">
                Thank you!
              </h2>
              <p className="text-[#121229] mb-4 text-lg">
                We will contact you soon..
              </p>
              <Button
                variant="primary"
                value="Go To Website"
                onClick={() => setIsPrimaryModalOpen(false)}
              />
            </div>
          </div>
        )}
      </section>
      <section
        id="about"
        className="w-full bg-white flex flex-col items-center px-4 py-5 md:py-10"
      >
        <div className="w-full max-w-7xl ">
          <p className="text-[#6E3BFF] font-semibold uppercase text-sm tracking-[5px]">
            WHY LEADMETRICS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#272735] mt-4 !leading-snug">
            Digital Marketing with AI <br />
            for Every Business
          </h2>
          <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.map((options: AboutDataItems) => {
              return (
                <div
                  key={options.id}
                  className="w-full bg-[#F6F5FA] flex flex-col gap-4 rounded-xl px-5 py-6 "
                >
                  <Image
                    src={options.icon}
                    alt={options.title}
                    height={56}
                    width={54}
                  />
                  <h3 className=" text-[#30313E] font-bold text-lg">
                    {options.title}
                  </h3>
                  <p className="text-[#262730]">{options.description}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button value="Contact Us" variant="primary" />
          </div>
        </div>
      </section>
      <section
        id="services"
        className="w-full flex justify-center bg-white bg-no-repeat bg-center bg-cover px-4 py-5 md:py-10"
        style={{ backgroundImage: `url(${"/images/services-bg.png"})` }}
      >
        <div className="w-full flex flex-col items-center max-w-7xl">
          <p className="text-[#6E3BFF] font-semibold uppercase text-sm tracking-[5px]">
            SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#272735] mt-4 !leading-snug">
            Our Services
          </h2>
          <div className="my-10 w-full">
            <div className="w-full mb-10 rounded-md flex justify-center sm:justify-between bg-[#F4F6FA] text-center text-[#30313E] flex-wrap gap-3  px-4 py-4  sm:py-2">
              {serviceOptions.map((items: ServiceOptionsItems) => {
                return (
                  <div
                    key={items.id}
                    className={`cursor-pointer px-8 py-2 rounded-lg w-[16rem] sm:w-[14rem] flex justify-center items-center transition-all duration-300 ${
                      items.id === selectedOption
                        ? "bg-[#FAAA01] text-white"
                        : "text-black"
                    }`}
                    onClick={() => optionSelectHandler(items.id)}
                  >
                    {items.option}
                  </div>
                );
              })}
            </div>
            {serviceOptionsData.map((options: ServiceOptionsDataItems) => {
              if (selectedOption === options.id) {
                return (
                  <div
                    key={options.id}
                    className="flex w-full flex-col sm:flex-row gap-4"
                  >
                    <div className="w-full sm:w-1/2 flex flex-col gap-4">
                      <h3 className="text-[#272735] font-bold text-2xl lg:text-3xl">
                        {options.title}
                      </h3>
                      <p className="text-black">{options.description}</p>
                      <p className="text-[#6E3BFF] mt-3 font-semibold">
                        Our services include:
                      </p>
                      {options.services.map((options: ServiceOptionsItems) => {
                        return (
                          <div
                            key={options.id}
                            className="w-full flex gap-2 items-center"
                          >
                            <div className="bg-[#6E3BFF] w-2 h-2"></div>
                            <p className="text-black">{options.option}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                      <Image
                        src={options.icon}
                        width={220}
                        alt="ai-driven"
                        height={160}
                        className="w-full max-w-[32rem] object-contain"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full bg-white flex flex-col items-center px-4 py-5 md:py-10"
      >
        <div className="w-full max-w-7xl">
          <p className="font-semibold text-[#6E3BFF] uppercase tracking-[5px] text-sm">
            FEATURES
          </p>
          <h2 className="text-[#272735] font-bold mt-4 text-3xl lg:text-4xl !leading-snug">
            Other Product Features
          </h2>
          <div className="grid grid-cols-1 gap-16 mt-16 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {featuresData.map((options: FeaturesDataItems) => {
              return (
                <div
                  key={options.id}
                  className="flex flex-col w-full justify-start max-w-[25rem]"
                >
                  <Image
                    src={options.icon}
                    alt="features"
                    width={32}
                    height={32}
                    className="w-8"
                  />
                  <p className="text-[#262730] mt-4">{options.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button value="Get A Call Back" variant="primary" />
          </div>
        </div>
      </section>
      <section
        id="clients"
        className="w-full py-16 px-4  bg-white flex flex-col items-center"
      >
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h2 className="text-[#272735] mt-4 font-bold text-3xl lg:text-4xl !leading-snug">
            Brands that trust us
          </h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={true}
            className="mt-16 w-full !flex justify-center"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: { slidesPerView: 3, spaceBetween: 20 },

              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {clientsData.map((items: ClientsDataItems) => {
              return (
                <SwiperSlide
                  key={items.id}
                  className="!flex justify-center items-center bg-[#3DBCED0D] mx-2 rounded-lg px-5 py-2"
                >
                  <Image
                    src={items.icon}
                    alt="clients"
                    width={112}
                    height={80}
                    className="object-contain w-28 h-20"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="w-full py-16 bg-white flex justify-center px-4 py-5 md:py-10">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <p className="font-semibold text-[#6E3BFF] uppercase tracking-[5px] text-sm">
            WHY LEADMETRICS
          </p>
          <h2 className="text-[#272735] font-bold mt-4 text-3xl lg:text-4xl !leading-snug">
            Our core Principles & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 mt-16">
            {principlesData.map((options: PrincipleDataItems) => {
              return (
                <div
                  key={options.id}
                  style={{ backgroundColor: options.background }}
                  className="max-w-[400px] rounded-xl px-5 py-6"
                >
                  <div className="p-4 flex justify-center bg-gradient-to-b from-white to-[#ffffff00] rounded-xl">
                    <Image
                      src={options.icon}
                      alt={options.title}
                      height={120}
                      width={200}
                    />
                  </div>

                  <h3 className="mt-6 text-[#30313E] font-bold text-lg">
                    {options.title}
                  </h3>
                  <p className="text-[#262730] my-4">{options.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-white flex justify-center px-4 py-5 md:py-10">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <p className="font-semibold text-[#6E3BFF] uppercase tracking-[5px] text-sm">
            FAQ’S
          </p>
          <h2 className="text-[#272735] font-bold mt-4 text-3xl lg:text-4xl !leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="w-full mt-16">
            <Accordion items={questionsData} />
          </div>
        </div>
      </section>
      <section id="bottom-form" className="w-full flex flex-col bg-white py-10 px-4">
        <div
          className="bg-[#6E3BFF] flex justify-center w-full object-cover bg-center bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-[#00000060] before:z-10"
          style={{ backgroundImage: `url(${"/images/bottom-form-bg.png"})` }}
        >
          <div className="w-full flex flex-col md:flex-row max-w-7xl z-10 py-16 px-4 gap-6">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold !leading-snug">
                Ready to start
                <br />
                sourcing leads Online?
              </h2>
              <p className="mt-6 text-lg">Explore more with Leadmetrics</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full flex justify-end">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    requirements: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={() => setIsSecondaryModalOpen(true)}
                >
                  {({ handleChange, values, errors, touched, submitForm }) => (
                    <Form className="w-full lg:max-w-md flex flex-col gap-6">
                      <InputField
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isError={errors.name}
                        touched={touched.name}
                        helperText={touched.name ? errors.name : ""}
                        placeholder="Name"
                        variant="input"
                        isBottomForm
                      />
                      <div className="flex gap-4 flex-col lg:flex-row">
                        <InputField
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isError={errors.email}
                          touched={touched.email}
                          helperText={touched.email ? errors.email : ""}
                          placeholder="Email"
                          variant="input"
                          isBottomForm
                        />
                        <InputField
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          isError={errors.phone}
                          touched={touched.phone}
                          helperText={touched.phone ? errors.phone : ""}
                          placeholder="Mobile Number"
                          variant="input"
                          isBottomForm
                        />
                      </div>
                      <InputField
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        isError={errors.company}
                        touched={touched.company}
                        helperText={touched.company ? errors.company : ""}
                        placeholder="Company"
                        variant="input"
                        isBottomForm
                      />
                      <InputField
                        name="requirements"
                        value={values.requirements}
                        onChange={handleChange}
                        isError={errors.requirements}
                        touched={touched.requirements}
                        helperText={
                          touched.requirements ? errors.requirements : ""
                        }
                        placeholder="Submit Your Requirements"
                        variant="textarea"
                        isBottomForm
                      />
                      <Button
                        value="Get Started"
                        variant="secondary"
                        onClick={submitForm}
                      />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-4 bg-[#FAAA01]"></div>
        {isSecondaryModalOpen && (
          <div className="backdrop-blur-sm fixed inset-0 bg-[#00000050] flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg text-center relative w-full max-w-md">
              <Image
                src={"/images/close.png"}
                alt="close"
                height={28}
                width={28}
                className="h-7 w-7 absolute top-3.5 right-3.5 cursor-pointer"
                onClick={() => setIsSecondaryModalOpen(false)}
              />
              <h2 className="text-2xl font-semibold my-4 text-[#386bb7]">
                Thank you!
              </h2>
              <p className="text-[#121229] mb-4 text-lg">
                We will contact you soon..
              </p>
              <Button
                variant="primary"
                value="Go To Website"
                onClick={() => setIsSecondaryModalOpen(false)}
              />
            </div>
          </div>
        )}
      </section>
      <footer className="w-full flex justify-center px-4 pt-10 bg-white">
        <div className="w-full flex max-w-7xl flex-col text-black">
          <div className="flex flex-col md:flex-row gap-4 w-full border-b border-b-[#0000001A] py-8">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div>
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={176}
                  height={27}
                />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm mt-1">support@leadmetrics.ai</p>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm mt-1">
                  +91 8590468816 <br /> +971 507540395 (UAE)
                </p>
              </div>
              <div>
                <h3 className="font-medium">Our Offices</h3>
                <div className="flex gap-4">
                  <p className="mt-4 text-sm">
                    India
                    <br />
                    Leadmetrics AI Private Limited
                    <br />
                    Kerala Startup Mission,
                    <br />
                    Integrated Startup Complex
                    <br />
                    Kinfra Hi-Tech Park, Kalamassery, Kochi,
                    <br />
                    Kerala 683503
                  </p>
                  <p className="mt-4 text-sm">
                    U.S.A
                    <br />
                    Leadmetrics, Inc
                    <br />
                    169 Madison Avenue, STE 2570, NY 10016, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end  md:items-end">
              <div className="flex flex-row flex-wrap justify-center md:flex-col items-start gap-7 mb-7 md:mr-7 ">
                {navigationData.map((items: NavbarProps) => {
                  return (
                    <a
                      key={items.id}
                      className="font-medium text-base cursor-pointer 
             text-[#2C2C4B] hover:text-[#6E3BFF] transition-all duration-300"
                      onClick={() => scrollToSection(items.name)}
                    >
                      {items.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="text-black text-center py-6 lg:text-start">
            <p>
              © 2025 All rights reserved. Digital Marketing with AI powered by
              Leadmetrics
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
