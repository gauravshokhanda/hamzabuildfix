import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { BarsArrowDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Arrow from "../../../public/images/arrow.png";
import Image from "next/image";

function AdminTable({ format, data }: { format: any[]; data: any[] }) {
  return (
    <div>
      <Table className="px-5 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            {format.map((formatData) => (
              <TableHeader key={formatData.title}>
                <div
                  className={clsx(
                    " flex items-center w-full",
                    formatData.showSort
                      ? "justify-between"
                      : "justify-center text-center"
                  )}
                >
                  <p className=" font-medium text-[#0A090B]">
                    {formatData.title}
                  </p>
                  {formatData.showSort && (
                    <button onClick={formatData.onclick}>
                      <Image
                        src={Arrow}
                        alt="arrow"
                        className=" hover:opacity-75"
                      />
                    </button>
                  )}
                </div>
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index} href={data.slug} title={`data #${data}`}>
              {format.map((formatData) => {
                const Component = formatData.component;

                return (
                  <TableCell>
                    <Component
                      {...data}
                      // @ts-ignore
                      {...(typeof data[formatData.key] === "string"
                        ? // @ts-ignore
                          { children: data[formatData.key] }
                        : // @ts-ignore
                          data[formatData.key])}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminTable;
