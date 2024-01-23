"use client";

import React from "react";
import { Image } from "@nextui-org/react";
import CustomizedButton from "./CustomizedButton";

const Product = () => {
  return (
    <div className="flex flex-row gap-x-12  p-12 border-l-2 border-l-black w-[90%] ">
      <div className="space-y-16 w-[60%]">
        <div className="space-y-10">
          <h1 className=" text-3xl font-bold">Papercup Machines</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quidem, quod voluptatem quae voluptates
            voluptatibus doloribus quos ex officiis. Quisquam voluptatum,
            quibusdam, quidem, quod voluptatem quae voluptates voluptatibus
            doloribus quos ex officiis.
          </p>
        </div>

        <CustomizedButton title="View More..." uri="" />
      </div>

      <Image
        alt="product image"
        src="https://images.unsplash.com/photo-1686266339981-83a4b2855001?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Product;
