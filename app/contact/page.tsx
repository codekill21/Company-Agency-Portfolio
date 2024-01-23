"use client";

import { Input, Link, Textarea } from "@nextui-org/react";
import { contact_details as Info } from "@/constants";
import CustomizedButton from "@/components/CustomizedButton";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <main className="min-h-screen items-center space-y-12 p-24">
      <NavigationBar isVisible={false} />
      <div className="text-center">
        <h1 className="text-center font-extrabold text-[80px] md:text-[80px]">
          Get In Touch
        </h1>
        <p className="w-full md:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around bg-slate-50 p-4 md:p-24 rounded-2xl">
        <div className="bg-slate-100 rounded-2xl p-4 md:p-16 space-y-8">
          <div className="space-y-3">
            <h1 className="text-lg font-extrabold text-center w-full md:w-[60%] mx-auto">
              Contact Information
            </h1>
            <h2 className="text-sm text-1/3 text-center">
              We provide high quality services to our clients, provide reliable
              connectiont to trusted factories.
            </h2>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl font-bold">OUR OFFICE</h1>
            <p className="text-sm">{Info.address}</p>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl font-bold">CONTACT INFO</h1>
            <p>{Info.email}</p>
            <p>{Info.telephone}</p>
          </div>

          <div className="flex space-x-8">
            <Link color="foreground" href={Info.facebook}>
              facebook
            </Link>

            <Link color="foreground" href={Info.youtube}>
              youtube
            </Link>
            <Link color="foreground" href={Info.youtube}>
              whatsapp
            </Link>
          </div>
        </div>

        <div>
          <form className="flex flex-col font-black space-y-8">
            <div className="flex flex-row justify-between space-x-12">
              <Input
                type="text"
                label="Name"
                placeholder="Enter your name"
                variant="underlined"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="underlined"
              />
            </div>

            <Input
              type="text"
              label="Subject"
              placeholder="Write here your subject"
              variant="underlined"
            />
            <Textarea
              variant="underlined"
              label="Message"
              labelPlacement="outside"
              placeholder="Enter your message"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
            <CustomizedButton title="Send Message" uri="" />
          </form>
        </div>
      </div>
      <div className="border-b mt-24"></div>
      <Footer />
    </main>
  );
}
