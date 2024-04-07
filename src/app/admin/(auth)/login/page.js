"use client";

// Next.js imports
import { useRouter } from "next/navigation";

// external imports
import Swal from "sweetalert2";

// local imports
import { Formik, Form } from "formik";
import { defaultLoginValue, loginSchema } from "@/util/adminFormSchema";
import Input from "@/components/GLOBAL/input/Input";
import Button from "@/components/GLOBAL/button/Button";
import supabase from "../../../../config/supabase";
import { useContext, useState } from "react";
// import { setAdminToken } from "../../adminAuth";
import { AuthContext } from "@/provider/AuthProvider";
import { generateToken } from "@/util/util";

const Login = () => {
  const [isVisible, setVisible] = useState(false);

  const router = useRouter();
  const { tokenSetter } = useContext(AuthContext);

  const handleFormSubmit = async (values, action) => {
    // _values_ stores the value received from the client(Formik)
    // _action_ is the event so (submit)
    console.log(values, "data user email and password");
    try {
      const { data, error } = await supabase
        .from("admin") //table
        .select("*") //all rows from the table
        .eq("username", values.username) //equate values.username with the row name username
        .eq("password", values.password) //equate values.password with the row name password
        .single();

      // data stores the value retreived from the database that matches the authentication
      console.log(data.user);

      if (error) {
        console.error("Login error:", error);
        Swal.fire({
          backdrop: "255, 255, 255, 0.5",
          title: "Login unsuccessful!",
          text: "Try again!",
          icon: "error",
          confirmButtonText: "Continue",
          confirmButtonColor: "#3085d6", // Adjust color as desired
        });
        action.resetForm();
      } else {
        console.log("Login successful:", data);
        const token = generateToken();

        // setAdminToken(token);
        localStorage.setItem("token", token);
        tokenSetter(token);

        Swal.fire({
          backdrop: "255, 255, 255, 0.5",
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonText: "Continue",
          confirmButtonColor: "#3085d6",
          allowEnterKey: true,
          timer: 1500,
        });
        router.replace("/admin/dashboard");

        action.resetForm();
        console.log(values);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main className=" flex items-center justify-center py-16 absolute inset-0 z-50 bg-secondary">
      <section className="flex flex-col items-center rounded-md overflow-hidden shadow-2xl w-[430px]">
        <h1 className=" w-full bg-primary text-center text-[21px] font-[600] py-3 text-secondary cursor-default uppercase">
          Attendance System
        </h1>
        <div className="px-4 py-6 space-y-3 bg-secondary flex flex-col w-full">
          <Formik
            initialValues={defaultLoginValue}
            validationSchema={loginSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => {
              return (
                <Form
                  className="flex flex-col gap-2"
                  onSubmit={(formikProps) => formikProps.handleFormSubmit()}
                  // formikProps is the built-in function provided to us
                >
                  <div>
                    <Input
                      placeholder="username"
                      name="username"
                      onChange={handleChange}
                      type="text"
                      value={values.username}
                      onBlur={handleBlur}
                      error={errors.username}
                    />
                    {errors.username && touched.username ? (
                      <p className="text-red-600 text-[12px] leading-[21px]">
                        {errors.username}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Input
                      placeholder="password"
                      name="password"
                      onChange={handleChange}
                      type={!isVisible ? "password" : "text"}
                      value={values.password}
                      onBlur={handleBlur}
                      error={errors.password}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-red-600 text-[12px] leading-[21px]">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-max flex items-center gap-1">
                    <input
                      type="checkbox"
                      id="showPassword"
                      onChange={() =>
                        setVisible((previousData) => !previousData)
                      }
                    />
                    <label
                      htmlFor="showPassword"
                      className="text-primary text-[14px]"
                    >
                      show password
                    </label>
                  </div>
                  <a
                    href="#"
                    className="underline text-blue-800"
                    onClick={() => console.log("button clicked")}
                  >
                    forgot password ?
                  </a>
                  <Button
                    bgColor="#0F172A"
                    title="Login"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default Login;
