"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import supabase from "@/config/supabase";
import Input from "@/components/GLOBAL/input/Input";
import Button from "@/components/GLOBAL/button/Button";
import { FaArrowCircleLeft, FaPlusCircle } from "react-icons/fa";
import { fetchEmployeeList } from "@/util/dataFetchAPI";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ADMIN/ui/table";

const Employees = () => {
  const router = useRouter();
  const [employeeList, setEmployeeList] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState("");

  const handleEditEmployee = (id) => {
    router.push(`/admin/employees/${id}`);
  };

  const handleDeleteEmployee = async (record_id) => {
    if (window.confirm("Are you sure about deleting this record ?")) {
      try {
        const { error } = await supabase
          .from("employees")
          .delete()
          .match({ employee_id: record_id });

        alert("Successfully deleted");

        if (error) {
          throw error;
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEmployeeList();
        setEmployeeList(data);

        // console.log(dateWithTimeStamp, "date from db");
      } catch (err) {
        console.error("Error fetching employee data ", err.message);
      }
    };

    fetchData();
  }, [employeeList]);

  // useEffect(() => {
  // const employeeId = params;
  // const fet}, []);

  let filteredData = employeeList.filter((employee) => {
    return employee.employee_name
      .toUpperCase()
      .includes(searchEmployee.toUpperCase());
  });

  return (
    <main className="flex flex-col md:items-end items-center gap-4">
      <section className="text-[14px] leading-[18px] font-[400] flex items-center gap-[6px] w-max ml-0">
        <button
          className="bg-primary flex items-center gap-3 h-full md:py-[16px] md:px-3 p-3 rounded-full md:rounded hover:opacity-85 active:translate-y-[1px] active:shadow-xl"
          onClick={() => router.push(`/admin/employees/add`)}
        >
          <FaPlusCircle color="white" size={20} />
          <span className="hidden md:block text-[12px] font-[600] text-white">
            New employee
          </span>
        </button>
        <Input
          placeholder="search employees"
          onChange={(e) => setSearchEmployee(e.target.value)}
        />
      </section>
      <section className="w-full bg-primary h-[62vh] overflow-y-scroll">
        <Table className="h-[40px] relative">
          <TableHeader className="">
            <TableRow>
              <TableHead>S.NO</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="bg-card-foreground">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-scroll">
            {filteredData.map((employee, index) => {
              return (
                <TableRow key={employee.employee_id}>
                  <TableCell className="">{index + 1}</TableCell>
                  <TableCell>{employee.employee_name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.contact}</TableCell>
                  <TableCell>{employee.created_at}</TableCell>
                  <TableCell className=" bg-card-foreground">
                    <div className="w-full space-y-2 flex flex-col">
                      <Button
                        title="edit"
                        bgColor="#0F172A"
                        onClick={() => handleEditEmployee(employee.employee_id)}
                      />
                      <Button
                        title="delete"
                        bgColor="#0F172A"
                        onClick={() =>
                          handleDeleteEmployee(employee.employee_id)
                        }
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    </main>
  );
};

export default Employees;
