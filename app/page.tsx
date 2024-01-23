"use client";
import CustomizedButton from "@/components/CustomizedButton";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Product from "@/components/Product";
import { services } from "@/constants";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalInfo, setModalInfo] = useState<any>({
    solution: "Solution",
    description: "Description",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-16 p-24">
      <NavigationBar isVisible={true} />
      {/**home intro right here with the basics blogs */}
      <section id="#">
        <div className="flex flex-row justify-around items-center">
          <div className="w-3/5 md:w-full space-y-8">
            <h1 className="text-[90px] font-extrabold">
              The best client support, for the best Chinese factory products!
            </h1>
            <p className="text-sm w-3/5 md:text-xl">
              We pride ourselves on sourcing the finest products directly from
              Chinese factories. Our dedicated team ensures that we only stock
              items that meet our high standards of quality and design. We
              believe in providing our customers with the best, and our
              selection of goods reflects this commitment.
            </p>

            <div>
              <CustomizedButton
                title="Get in Touch"
                uri="http://localhost:3000/contact"
              />
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://source.unsplash.com/1600x900/?factory"
              alt="hero"
              className="w-[900px] h-[700px]"
            />
          </div>
        </div>
        <div className="border-b mt-24"></div>
      </section>
      {/**services right here*/}
      {/** milestones solutions right here*/}
      <section id="services" className="space-y-12">
        <div className="m-12 ">
          <h1 className="text-[90px] font-extrabold text-center">
            Company Solutions!
          </h1>
          <p className="text-sm text-center ">
            Company Solutions is a key section of our website where we showcase
            our unique services. The heading 'Milestone Solutions!' is
            prominently displayed with a large font size and bold weight to grab
            the visitor's attention. Following the heading, we provide a brief
            description of our services. Currently, the description is filled
            with placeholder text, which should be replaced with a concise and
            engaging summary of the solutions we offer. This section is designed
            to give visitors a quick overview of our capabilities and entice
            them to learn more about our offerings
          </p>
        </div>

        <div className="gap-6 grid grid-cols-3">
          {services.map((item, index) => (
            <>
              <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={() => {
                  setModalInfo(item);
                  onOpen();
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.solution}
                    className="w-full object-cover h-[320px]"
                    src={`https://source.unsplash.com/random/?${item.solution}`}
                  />
                </CardBody>
                <CardFooter className="text-small font-bold justify-between">
                  <b>{item.solution}</b>
                </CardFooter>
              </Card>

              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={true}
                backdrop="transparent"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        {modalInfo.solution}
                      </ModalHeader>
                      <ModalBody>
                        <p>{modalInfo.description}</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          ))}
        </div>
      </section>
      {/**home intro right here with the basics blogs */}
      <section id="products">
        <div className="space-y-28">
          <div className="mt-12">
            <h1 className="text-[100px] font-extrabold mb-4">
              Featured Products
            </h1>
            <p className="text-sm w-[50%]">
              Discover our range of featured products, carefully selected for
              their superior quality, innovative design, and excellent value.
              These products represent the best of what we have to offer, and
              we're excited to share them with you. Explore our featured
              products and find your next must-have item.
            </p>
          </div>

          <Product />

          <div className="border-b mt-24"></div>
        </div>
      </section>
      {/**more information about us right  here*/}
      <section id="aboutus">
        <div className="m-12">
          <h1 className="text-[100px] text-center font-extrabold">About Us</h1>
          <div>
            <h3 className="text-2xl text-center m-2">Lets introduce with</h3>
            <p className="text-sm text-center font-light">
              please give the description of the milestone services right here
            </p>
          </div>
        </div>
        <div className="flex justify-center m-12">
          <Card className="p-10 w-3/4 border-3 border-black space-y-2">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="text-[70px] font-extrabold">
                Increase your sales by<br></br> analyzing your collected data!
              </h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2 w-3/4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </CardBody>
            <CardFooter>
              <CustomizedButton
                title="More About us..."
                uri="http://localhost:3000/about"
              />
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <h5 className="text-sm text-center w-[50%] border-t p-6">
            Cras tincidunt lobortis feugiat vivamus at augue. Mollis nunc sed id
            semper risus in hendrerit gravida rutrum. A pellentesque sit amet
            porttitor. Massa sed elementum tempus egestas sed sed risus.
          </h5>
          <Image
            src="https://source.unsplash.com/random/?company"
            width={600}
            height={200}
          />
        </div>
        <div className="border-b mt-20"></div>
      </section>
      <Footer />
    </main>
  );
}
