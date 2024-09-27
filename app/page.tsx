"use client";

import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import { navItemsData } from "./utils/NavItems";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const Page: FC<Props> = (props) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const pathname = usePathname(); // This is a replacement for `useRouter` in Next.js 13+ (`app` directory)
  // Ensure activeItem is set based on the current pathname
  useEffect(() => {
    if (pathname) {
      const currentItem = navItemsData.find(
        (item) => item.link === pathname
      )?.id;
      setActiveItem(currentItem || 1); // Set default to 1 if no match is found
    }
  }, [pathname]);

  // Prevent rendering Header and other components until activeItem is ready
  if (activeItem === null) {
    return null; // Or you can render a loading spinner here
  }
  return (
    <div>
      <Heading
        title="Elearning "
        description="Elearning Platform online and recorded courses for teachers,student and parents"
        keywords="Elearning,online,recorded,courses,teachers,student,parents"
      />
      <Header activeItem={activeItem} />
    </div>
  );
};
export default Page;
