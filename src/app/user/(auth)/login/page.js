"use client";

// Next.js imports
import { useRouter } from "next/navigation";

// external imports
import Swal from "sweetalert2";

// local imports
import { Formik, Form } from "formik";
import Input from "@/components/GLOBAL/input/Input";
import Button from "@/components/GLOBAL/button/Button";
import supabase from "../../../../config/supabase";
import { userLoginSchema, defaultUserValue } from "./userFormSchema";

const Login = () => {
  const router = useRouter();

  const handleFormSubmit = async (values, action) => {
    // values stores the value received from the client(Formik)
    // action is the event so (submit)

    try {
      const { data, error } = await supabase
        .from("employees") //table
        .select("*") //all rows from the table
        .eq("email", values.email) //equate values.email with the row name email
        .eq("pin", values.pin) //equate values.pin with the row name pin
        .single();

      // data stores the value retreived from the database that matches the authentication

      console.log(data);

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
        Swal.fire({
          backdrop: "255, 255, 255, 0.5",
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          timer: 1500,
          confirmButtonText: "Continue",
          confirmButtonColor: "#3085d6", // Adjust color as desired
        });
        action.resetForm();
        console.log(values);
        router.replace("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main className=" flex items-center justify-center py-16 bg-white absolute inset-0">
      <section className="flex flex-col items-center rounded-md overflow-hidden shadow-xl w-[430px]">
        <h1 className=" w-full bg-primary text-[24px] font-[700] leading-relaxed text-center py-3 text-secondary cursor-default uppercase shadow-xl">
          User Login Form
        </h1>
        <div className="px-4 py-6 space-y-3 bg-textColor flex flex-col w-full">
          <Formik
            initialValues={defaultUserValue}
            validationSchema={userLoginSchema}
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
                      placeholder="email"
                      name="email"
                      onChange={handleChange}
                      type="text"
                      value={values.email}
                      onBlur={handleBlur}
                      error={errors.email}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-red-600 text-[12px] leading-[21px]">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Input
                      placeholder="pin"
                      name="pin"
                      onChange={handleChange}
                      type="text"
                      value={values.pin}
                      onBlur={handleBlur}
                      error={errors.pin}
                    />
                    {errors.pin && touched.pin ? (
                      <p className="text-red-600 text-[12px] leading-[21px]">
                        {errors.pin}
                      </p>
                    ) : null}
                  </div>
                  <a
                    href="#"
                    className="underline text-blue-800"
                    onClick={() => console.log("button clicked")}
                  >
                    forgot pin ?
                  </a>
                  <Button
                    bgColor="#0F172A"
                    title="Login"
                    type="button"
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
