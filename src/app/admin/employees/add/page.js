// import EmployeeForm from "@/components/GLOBAL/form/form";
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";

import { defaultAddFormSchema, addFormSchema } from "./addFormSchrma";
import supabase from "@/config/supabase";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { generatePin } from "@/util/util";
import Input from "@/components/GLOBAL/input/Input";
import Button from "@/components/GLOBAL/button/Button";

const AddEmployeeForm = () => {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const createPin = () => {
    setPin(() => generatePin());
  };

  const handleFormSubmit = async (values, action) => {
    console.log(values, "user inputs");
    try {
      const { data: emailList, error: fetchError } = await supabase
        .from("employees")
        .select("email");

      //returns an array of object
      console.log(emailList);

      if (fetchError) {
        console.error(error.message);
        return;
      }

      const isExistingEmail = emailList.filter(
        (databaseItem) => databaseItem.email === values.email
      );
      console.log(isExistingEmail);

      if (!isExistingEmail.length) {
        const { error } = await supabase.from("employees").insert({
          employee_name: values.employee_name,
          position: values.position,
          email: values.email,
          contact: values.contact,
          pin: values.pin,
        });

        if (error) {
          console.error(error.message);
          return;
        }

        alert("Successfully created a new employee");
        action.resetForm();
      } else {
        alert("Email address is already registered");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main className="flex flex-col gap-3">
      <a
        onClick={() => router.back()}
        className="flex items-center gap-2 w-max rounded-full text-primary hover:-translate-x-[2px] ease-in-out duration-300 cursor-pointer underline"
      >
        <FaArrowAltCircleLeft />
        <span>Back</span>
      </a>
      <section className="w-full  h-full rounded-md overflow-hidden shadow-xl">
        <h2 className="uppercase text-center py-2 bg-primary text-secondary font-[600] text-[24px]">
          Create new employee
        </h2>
        <section className="p-4 bg-slate-200">
          <Formik
            initialValues={defaultAddFormSchema}
            validationSchema={addFormSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
              handleReset,
              isSubmitting,
            }) => {
              return (
                <Form
                  onSubmit={(formikProps) => formikProps.handleFormSubmit()}
                  className="grid grid-cols-3 gap-3"
                >
                  {/* name */}
                  <div>
                    <label
                      htmlFor="employee_name"
                      className="uppercase text-md font-semibold"
                    >
                      Name:
                    </label>
                    <Input
                      placeholder="employee name"
                      name="employee_name"
                      id="employee_name"
                      onChange={handleChange}
                      type="text"
                      value={values.employee_name}
                      onBlur={handleBlur}
                      error={errors.employee_name}
                    />
                    {errors.employee_name && touched.employee_name ? (
                      <div className="text-red-600">{errors.employee_name}</div>
                    ) : null}
                  </div>
                  {/* position */}
                  <div>
                    <label
                      htmlFor="name"
                      className="uppercase text-md font-semibold"
                    >
                      Position:
                    </label>

                    <Input
                      placeholder="position"
                      name="position"
                      onChange={handleChange}
                      type="text"
                      value={values.position}
                      onBlur={handleBlur}
                      error={errors.position}
                    />
                    {errors.position && touched.position ? (
                      <div className="text-red-600">{errors.position}</div>
                    ) : null}
                  </div>
                  {/* email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="uppercase text-md font-semibold"
                    >
                      Email:
                    </label>
                    <Input
                      placeholder="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      value={values.email}
                      error={errors.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-600">{errors.email}</div>
                    ) : null}
                  </div>
                  {/* contact */}
                  <div>
                    <label
                      htmlFor="contact"
                      className="uppercase text-md font-semibold"
                    >
                      Contact:
                    </label>
                    <Input
                      placeholder="contact"
                      name="contact"
                      onChange={handleChange}
                      type="text"
                      value={values.contact}
                      onBlur={handleBlur}
                      error={errors.contact}
                    />
                    {errors.contact && touched.contact ? (
                      <div className="text-red-600">{errors.contact}</div>
                    ) : null}
                  </div>
                  {/* Pin */}
                  <div>
                    <label
                      htmlFor="pin"
                      className="uppercase text-md font-semibold"
                    >
                      4-Digit Pin:
                    </label>
                    <Input
                      placeholder="pin"
                      name="pin"
                      onChange={handleChange}
                      type="password"
                      value={values.pin}
                      onBlur={handleBlur}
                      error={errors.pin}
                    />
                    {errors.pin && touched.pin ? (
                      <div className="text-red-600">{errors.pin}</div>
                    ) : null}
                  </div>

                  <div className="flex justify-end col-span-3 gap-4">
                    <Button
                      bgColor="#020817"
                      title="Create"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    />
                    <Button
                      bgColor="#a6a6a6"
                      title="Reset"
                      onClick={handleReset}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </section>
        <section className=" p-4 border-t-2 border-slate-700">
          <div>
            <label htmlFor="pin" className="uppercase text-md font-semibold">
              Generate a pin:
            </label>
            <div className="flex items-center gap-2">
              <input
                readOnly
                type="text"
                value={pin}
                className="focus:outline-0 focus:border-0 p-2 shadow-lg rounded-lg"
              />
              <button
                onClick={createPin}
                className=" rounded-lg py-2 px-4 bg-[#020817] font-semibold text-white shadow-lg"
              >
                Generate
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AddEmployeeForm;
