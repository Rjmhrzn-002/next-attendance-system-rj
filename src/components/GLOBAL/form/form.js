"use client";
// import { Formik, Form } from "formik";
// import { generatePin } from "@/util/util";
// import Button from "@/components/GLOBAL/button/Button";
// import Input from "@/components/GLOBAL/input/Input";

// const EmployeeForm = ({ initialValues, onSubmit }) => {
//   return (
//     <main className="w-full bg-slate-100">
//       <Formik
//         initialValues={initialValues}
//         // validationSchema={formSchema}
//         onSubmit={onSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleSubmit,
//           handleChange,
//           handleBlur,
//           handleReset,
//           isSubmitting,
//         }) => {
//           return (
//             <Form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3">
//               {/* name */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="uppercase text-md font-semibold"
//                 >
//                   Name:
//                 </label>
//                 <Input
//                   placeholder="employee name"
//                   name="employee_name"
//                   id="name"
//                   onChange={handleChange}
//                   type="text"
//                   value={values?.employee_name}
//                   onBlur={handleBlur}
//                   error={Boolean(errors.employee_name)}
//                 />
//                 {errors.employee_name && touched.employee_name ? (
//                   <div className="text-red-600">{errors.employee_name}</div>
//                 ) : null}
//               </div>
//               {/* position */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="uppercase text-md font-semibold"
//                 >
//                   Position:
//                 </label>

//                 <Input
//                   placeholder="position"
//                   name="position"
//                   onChange={handleChange}
//                   type="text"
//                   value={values?.position}
//                   onBlur={handleBlur}
//                   error={Boolean(errors.position)}
//                 />
//                 {errors.position && touched.position ? (
//                   <div className="text-red-600">{errors.position}</div>
//                 ) : null}
//               </div>
//               {/* email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="uppercase text-md font-semibold"
//                 >
//                   Email:
//                 </label>
//                 <Input
//                   placeholder="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   type="email"
//                   name="email"
//                   value={values?.email}
//                   error={Boolean(errors.email)}
//                 />
//                 {errors.email && touched.email ? (
//                   <div className="text-red-600">{errors.email}</div>
//                 ) : null}
//               </div>
//               {/* contact */}
//               <div>
//                 <label
//                   htmlFor="contact"
//                   className="uppercase text-md font-semibold"
//                 >
//                   Contact:
//                 </label>
//                 <Input
//                   placeholder="contact"
//                   name="contact"
//                   onChange={handleChange}
//                   type="text"
//                   value={values?.contact}
//                   onBlur={handleBlur}
//                   error={Boolean(errors.contact)}
//                 />
//                 {errors.contact && touched.contact ? (
//                   <div className="text-red-600">{errors.contact}</div>
//                 ) : null}
//               </div>
//               {/* Pin */}
//               <div>
//                 <label
//                   htmlFor="pin"
//                   className="uppercase text-md font-semibold"
//                 >
//                   4-Digit Pin:
//                 </label>
//                 <Input
//                   placeholder="pin"
//                   name="pin"
//                   onChange={handleChange}
//                   type="password"
//                   value={values?.pin}
//                   onBlur={handleBlur}
//                   error={Boolean(errors.pin)}
//                 />
//                 {errors.pin && touched.pin ? (
//                   <div className="text-red-600">{errors.pin}</div>
//                 ) : null}
//               </div>

//               <div className="flex justify-end col-span-3 gap-4">
//                 <Button
//                   bgColor="#020817"
//                   title={isEditing ? "Save" : "Create"}
//                   type="submit"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                 />
//                 <Button bgColor="#a6a6a6" title="Reset" onClick={handleReset} />
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </main>
//   );
// };

// export default EmployeeForm;
