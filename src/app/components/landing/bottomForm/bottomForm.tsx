"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../inputfield/inputField";
import Button from "../../button/button";

const BottomForm = React.memo(() => {
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

  return (
    <section id="bottom-form" className="w-full flex flex-col bg-white py-10">
      <div
        className="bg-[#6E3BFF] px-4 flex justify-center w-full object-cover bg-center bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-[#00000060] before:z-10"
        style={{ backgroundImage: `url(${"/images/bottom-form-bg.png"})` }}
      >
        <div className="w-full flex flex-col md:flex-row max-w-7xl z-10 py-16 gap-6">
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
  );
});

export default BottomForm;
BottomForm.displayName = "BottomForm";
