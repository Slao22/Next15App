import React from "react";

export default function DashBoardDetail({
  params,
}: Readonly<{ params: { id: string } }>) {
  const { id } = params;
  return <div>DashBoardDetail: {id}</div>;
}
