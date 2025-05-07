import React from "react";

const SkeletonCourseInfo = () => {
  return (
    <>
      <div className="animate-pulse w-[400px] h-[266px] bg-slate-200"></div>
      <div>
        <div className="  mt-2 animate-pulse w-[250px] h-[20px] bg-slate-200"></div>
        <div className="  mt-2 animate-pulse w-[200px] h-[20px] bg-slate-200"></div>
        <div className="  mt-4 animate-pulse w-[400px] h-[20px] bg-slate-200"></div>
        <div className="  mt-2 animate-pulse w-[200px] h-[20px] bg-slate-200"></div>
        <div className="  mt-3 animate-pulse w-[100px] h-[20px] bg-slate-200"></div>
        <div className="  mt-4 animate-pulse w-[150px] h-[20px] bg-slate-200"></div>
      </div>
    </>
  );
};

export default SkeletonCourseInfo;
   