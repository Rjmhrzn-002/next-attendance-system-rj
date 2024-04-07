// import { useEffect, useState } from "react";
import supabase from "../config/supabase";

export const totalCount = async () => {
  try {
    const employeeCount = await supabase
      .from("employees")
      .select("employee_id", "COUNT(*)");

    if (employeeCount) {
      return employeeCount.data.length;
    } else {
      console.error("Error fetching row count:", error);
      // return 0; // fallback error data
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchEmployeeList = async () => {
  try {
    const { data, error } = await supabase.from("employees").select("*");

    if (data) {
      // console.log(data);
      return data;
    }
    if (error) {
      throw error;
    }
  } catch (err) {
    console.log(err.message);
    // throw err;
  }
};

export const fetchAllAttendance = async () => {
  try {
    const { data, error } = await supabase.from("attendance").select("*");
    if (error) {
      throw error;
    }
    // console.log(data, "fetch data of attendance count");
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchMessagesList = async () => {
  try {
    const { data, error } = await supabase.from("messages").select("*");

    if (data) {
      // console.log(data, "api fetched data");
      return data;
    }

    if (error) {
      console.error(error);
      throw Error;
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const createNewNotice = async (notice) => {
  try {
    const { error } = await supabase
      .from("notices")
      .insert({ notice: notice.message, created_at: notice.created_At });
    if (error) {
      throw new Error(`Error creating notice: ${error.message}`);
    }
    alert("Notice sent out");
  } catch (error) {
    console.error("Error creating notice:", error);
    throw error;
  }
};

// export const fetchAttendanceDate = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("attendance")
//       .select("clock_in");

//     if (error) {
//       throw new Error(err.message);
//     }
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
