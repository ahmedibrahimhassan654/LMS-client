"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="Elearning "
        description="Elearning Platform online and recorded courses for teachers,student and parents"
        keywords="Elearning,online,recorded,courses,teachers,student,parents"
      />
    </div>
  );
};
export default page;
