import Link from "next/link";
import React from "react";

export default function DashBoard() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard/1">
            <p>Dashboard 1</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/2">
            <p>Dashboard 2</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/3">
            <p>Dashboard 3</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
