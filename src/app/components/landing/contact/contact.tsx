"use client";

import React, { useState } from "react";
import InputField from "../../inputfield/inputField";
import Image from "next/image";
import { offeringsData } from "@/app/constants";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../button/button";

interface OfferingsDataItems {
  title: string;
  id: number;
}

const Contact = React.memo(() => {
  const [isPrimaryModalOpen, setIsPrimaryModalOpen] = useState(false);

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

  return (
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
                <p className="text-lg text-[#212136] font-semibold">
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
  );
});
export default Contact;
Contact.displayName = "Contact";
