import React, { useState } from "react";

import { MdInbox } from "react-icons/md";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
];

const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);
  const { emails } = useSelector((store) => store.app);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500 ">
            Your Number of email is {emails?.length}
          </p>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-5 p-4 ${
                mailTypeSelected === index
                  ? "border-b-4 border-b-blue-600 text-blue-600"
                  : "border-b-4 border-b-transparent"
              } w-52 hover:bg-gray-100`}
              onClick={() => {
                setMailTypeSelected(index);
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Inbox;
