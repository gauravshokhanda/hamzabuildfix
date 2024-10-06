import React from "react";

function AdminContainer({
  children,
  title,
  rightComponent,
  footer,
}: {
  children: React.ReactNode;
  title: string;
  rightComponent: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className=" md:border rounded-2xl overflow-hidden w-full h-full flex flex-col">
      <div className=" flex w-full justify-between p-5 border-b items-center gap-3">
        <h3 className=" text-xl font-bold text-text_primary">{title}</h3>
        {rightComponent}
      </div>
      <div className=" flex-1 flex  flex-col justify-between">
        <div>{children}</div>
        {footer && <div className=" border-t p-5 ">{footer}</div>}
      </div>
    </div>
  );
}
export default AdminContainer;
