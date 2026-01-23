"use client";

import { Tabs } from "../ui/tabs";

import { projects } from "../../assets/data";

export function TabsDemo() {
  const tabs = [
    {
      title: "AKS India Group",
      value: "AKS India Group",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>AKS India Group</p>
          <DummyContent imageurl="/projects/project1.png" ProjectName="AKS India Group" />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-8">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({imageurl,ProjectName}) => {
  return (
    <img
      src={imageurl}
      alt={ProjectName}
      width="600"
      height="400"
      className="object-cover object-center h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
  );
};
