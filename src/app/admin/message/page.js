"use client";

import React, { useEffect, useState } from "react";
import { fetchMessagesList } from "@/util/dataFetchAPI";
import supabase from "@/config/supabase";
// import { useRouter } from "next/navigation";
// import { FaPlusCircle } from "react-icons/fa6";
// const router = useRouter();

const Message = () => {
  const [messageList, setMessageList] = useState([]);

  const handleMessageDelete = async (messageId) => {
    try {
      const { error } = await supabase
        .from("messages")
        .delete()
        .match({ id: messageId });

      if (error) {
        throw error;
      }
      alert("Successfully deleted");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const messages = await fetchMessagesList();
        setMessageList(messages);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchAllMessages();
  }, []);

  return (
    <main className="h-full bg-card-foreground overflow-y-auto rounded-lg">
      <h1 className="text-[18px] uppercase bg-primary text-secondary text-center py-2">
        Messages
      </h1>
      <section className="p-4 flex flex-col gap-2">
        <p className="text-secondary">{new Date().toDateString()}(Today)</p>
        <section className="grid grid-cols-3 gap-2 overflow-y-auto">
          {messageList.map((message) => (
            <div
              key={message.id}
              className="bg-card text-primary p-4 rounded-lg flex flex-col justify-between gap-3 shadow-lg shadow-slate-800"
            >
              <div className="flex items-center justify-end">
                <button
                  onClick={() => handleMessageDelete(message.id)}
                  className="flex items-center justify-center bg-red-600 text-secondary rounded-lg size-6 active:translate-y-[1px]"
                >
                  X
                </button>
              </div>
              <p className="cursor-default flex-1  line-clamp-2 hover:line-clamp-none">
                # {message.message}
              </p>
              <p className=" flex flex-col justify-between">
                <span className="text-[12px] w-max">
                  From {message.employee_name ?? "Unknown"}
                </span>
                <span className="text-[10px]">{message.created_at}</span>
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Message;

{
  /* <button
        className="bg-primary flex items-center gap-3 h-full md:py-[16px] md:px-3 p-3 rounded-full md:rounded hover:opacity-85 active:translate-y-[1px] active:shadow-xl"
        onClick={() => router.push("/admin/employees/new-employee")}
      >
        <FaPlusCircle color="white" size={20} />
        <span className="hidden md:block text-[12px] font-[600] text-white">
          New employee
        </span>
      </button> */
}
