"use client";
// global imports
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// utils imports
import {
  totalCount,
  fetchAllAttendance,
  createNewNotice,
} from "@/util/dataFetchAPI";

// component imports
import Input from "@/components/GLOBAL/input/Input";

const Dashboard = () => {
  const IN_TIME = 1000;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [employeeCount, setEmployeeCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState({
    present: 0,
    absent: 0,
    late: 0,
  });
  const [currentRecord, setCurrentRecord] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const fetchAllData = async () => {
      const newAttendance = {
        present: 0,
        absent: 0,
        late: 0,
      };

      const currentRecord = [];

      const totEmployee = await totalCount();
      const fetchAttendanceData = await fetchAllAttendance();

      for (const record of fetchAttendanceData) {
        switch (record.status) {
          case "present":
            newAttendance.present++;
            // console.log("successfully incremented present count");
            break;
          case "absent":
            newAttendance.absent++;
            // console.log("successfully incremented absent count");

            break;
          case "late":
            newAttendance.late++;
            // console.log("successfully incremented late count");

            break;

          default:
            console.warn(`Unknown attendance status: ${record.status}`);

            break;
        }
      }

      for (const record of fetchAttendanceData) {
        // console.log(record.clock_in.split(":").splice(0, 2).join(""));
        const employeesInTime = record.clock_in
          .split(":")
          .splice(0, 2)
          .join("");

        if (900 <= IN_TIME) {
          console.log("employee on time");
        } else {
          console.log("employee late");
        }
      }

      setEmployeeCount(totEmployee);
      setAttendanceCount(newAttendance);
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    // Function to get the current date and time in the format compatible with datetime-local input
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear().toString().padStart(4, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    setCurrentDateTime(getCurrentDateTime());
  }, []);

  const handleNoticeForm = (data) => {
    createNewNotice(data);
    reset();
  };

  return (
    <main className="h-full rounded-xl overflow-hidden bg-foreground text-white p-4 grid md:grid-cols-3 gap-4">
      <section className="flex items-center justify-center gap-4 text-secondary bg-primary p-2 rounded-lg shadow-sm shadow-gray-00 ">
        <p className="">Total Employees</p>
        <span>|</span>
        <p className="font-[500] text-[2rem]">{employeeCount}</p>
      </section>
      <section className="flex flex-col items-center order-0 md:order-none rounded-lg  overflow-hidden  row-span-2">
        <h1 className="w-full text-center py-4 text-[21px] font-[500]  text-primary bg-secondary">
          Today&apos;s Attendance
        </h1>
        <div className="flex-1 w-full bg-primary text-secondary p-2 overflow-auto">
          5
        </div>
      </section>
      {/* publish notice*/}
      <section className="text-secondary order-10 md:order-none flex flex-col items-end gap-2 rounded-lg row-span-3 p-3 bg-secondary">
        <form
          onSubmit={handleSubmit(handleNoticeForm)}
          className="w-full h-full flex flex-col gap-2 items-end "
        >
          <div className="w-full">
            <input
              {...register("created_At")}
              type="datetime-local"
              placeholder="Select a date"
              value={currentDateTime}
              className=" w-full text-primary flex-1 px-2 py-3 rounded-md resize-none shadow-md "
            />
          </div>
          <textarea
            {...register("message", { required: true })}
            id="notice"
            placeholder="leave a notice for all"
            className={`${
              errors.message ? "focus:outline-red-600" : null
            } w-full text-primary flex-1 p-2 rounded-md resize-none shadow-md `}
          />
          {errors.message && (
            <p className="text-red-600 text-[12px]">*Notice is required.</p>
          )}
          <button
            type="submit"
            className="w-max py-2 px-4 font-[500] text-[18px] bg-primary text-white rounded-lg"
          >
            Share
          </button>
        </form>
      </section>
      <section className="flex justify-between md:flex-col gap-3.5 text-secondary row-span-2">
        <div className="bg-primary text-[1.2rem] flex-1 flex gap-3 items-center justify-center rounded-lg py-3">
          <p>{attendanceCount.present}</p>
          <p>|</p>
          <p>Present</p>
        </div>
        <div className="bg-primary text-[1.2em] flex-1 flex gap-3 items-center justify-center   rounded-lg py-3">
          <p>{attendanceCount.absent}</p>
          <p>|</p>
          <p>Absent</p>
        </div>
        <div className="bg-primary text-[1.2em] flex-1 flex gap-3 items-center justify-center  rounded-lg py-3">
          <p>{attendanceCount.late}</p>
          <p>|</p>
          <p>Late</p>
        </div>
      </section>
      <section className="bg-primary p-2 rounded-lg shadow-xl flex items-center">
        <div className="w-full flex justify-center">
          <a
            href="#"
            target="_blank"
            className="w-full text-center text-[18px] underline"
          >
            Attendance report into CSV file
          </a>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
