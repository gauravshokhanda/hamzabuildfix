import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import clsx from "clsx";
import Arrow from "../../../public/images/arrow.png";
import Image from "next/image";

interface FormatData {
  title: string;
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  showSort?: boolean;
  onclick?: () => void;
}

interface DataItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  slug?: string;
}

interface AdminTableProps {
  format: FormatData[];
  data: DataItem[];
}

function AdminTable({ format, data }: AdminTableProps) {
  return (
    <div>
      <Table className="px-5 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            {format.map((formatData) => (
              <TableHeader key={formatData.title}>
                <div
                  className={clsx(
                    "flex items-center w-full",
                    formatData.showSort
                      ? "justify-between"
                      : "justify-center text-center"
                  )}
                >
                  <p className="font-medium text-[#0A090B]">
                    {formatData.title}
                  </p>
                  {formatData.showSort && formatData.onclick && (
                    <button
                      onClick={formatData.onclick}
                      aria-label={`Sort by ${formatData.title}`}
                    >
                      <Image
                        src={Arrow}
                        alt="Sort arrow"
                        className="hover:opacity-75"
                      />
                    </button>
                  )}
                </div>
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dataItem, index) => (
            <TableRow
              key={index}
              href={dataItem.slug}
              title={`Row data #${index}`}
            >
              {format.map((formatData) => {
                const Component = formatData.component;
                const cellData = dataItem[formatData.key];

                return (
                  <TableCell key={formatData.key}>
                    {typeof cellData === "string" ? (
                      <Component>{cellData}</Component>  // Render the string content between the tags
                    ) : (
                      <Component {...cellData} {...dataItem} />
                    )}
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
