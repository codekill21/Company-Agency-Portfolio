import React from "react";
import { nav_links } from "@/constants";
import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="flex justify-between space-x-24 ">
      <div className="w-1/4 space-y-6">
        <Link
          color="foreground"
          href="http://localhost:3000/"
          className="text-xl font-extrabold"
        >
          {" "}
          Import& Export
        </Link>
        <p>
          At Company Import & Export, we are committed to ensuring smooth and
          efficient trade operations for our clients, helping them navigate the
          complexities of global commerce with ease and confidence.
        </p>
        <h3 className="text-sm font-black">
          &copy; 2024 Company Import& Export, by
          <a className="underline" href="https://github.com/codekill21">
            {" "}
            CodeKill.{" "}
          </a>
          All Rights reserved.
        </h3>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold">Links</h1>
        <ul className="flex flex-col space-y-2">
          {nav_links.map((items) => {
            return (
              <Link color="foreground" href={items.url}>
                {items.title}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="font-bold">Pages</h1>

        <div className="flex flex-col space-y-2">
          <Link color="foreground" href="localhost:300/">
            Home
          </Link>
          <Link color="foreground" href="localhost:300/about">
            About Us
          </Link>
          <Link color="foreground" href="localhost:300/contact">
            Contact Us
          </Link>
          <Link color="foreground" href="localhost:300/products">
            Our Products
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold">Others</h1>
        <div className="flex flex-col space-y-2">
          <Link color="foreground" href="localhost:300/">
            Terms of Service
          </Link>
          <Link color="foreground" href="localhost:300/about"></Link>
          <Link color="foreground" href="localhost:300/contact">
            Privacy Policies
          </Link>
          <Link color="foreground" href="localhost:300/products">
            Job Opportunities
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h1>Follow Us</h1>
        <div className="flex justify-between space-x-4">
          <Link color="foreground" href="localhost:300/">
            Facebook
          </Link>
          <Link color="foreground" href="localhost:300/about">
            Youtube
          </Link>
          <Link color="foreground" href="localhost:300/contact">
            Whatsapp
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
