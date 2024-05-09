"use client";

import Link from "next/link";
import { navigationItems } from "./Navbar";

export function Footer() {
  return (
    <footer className="my-12">
      <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-primary/75"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </ul>

      <p className="mt-2 text-center text-muted-foreground">
        &copy; 2024. All Rights Reserved. <br />
        <span className="font-semibold block mt-2">
          Jatesh <span className="text-blue-500">Parikh</span>
        </span>
      </p>
    </footer>
  );
}
