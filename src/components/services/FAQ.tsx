import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import TitleIntro from "../ui/TitleIntro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { customers_bg } from "@/assets";

interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
  return (
    <section
      className="sm:py-24 py-16 w-full relative  bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${customers_bg.src})` }}
    >
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-once="true"
        className="container max-w-5xl mx-auto flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col items-center gap-4 pb-12">
          <TitleIntro> FAQ</TitleIntro>
          <SmallHeading size="lg" className="text-center">
            Frequently Asked Questions
          </SmallHeading>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white p-4 rounded-xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <SmallHeading size="sm">What is tracking id?</SmallHeading>
            </AccordionTrigger>
            <AccordionContent>
              A tracking ID is a unique code assigned to your car repair at Car
              Clinic. It allows you to monitor the progress of your repair,
              providing real-time updates on its status. With the tracking ID,
              you can stay informed about the various stages of the repair
              process, from scheduling to completion. It ensures transparency
              and allows you to anticipate when your car will be ready for
              pickup.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <SmallHeading size="sm">How do I get a tracking id?</SmallHeading>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li className="pb-2">
                  <strong>Schedule your repair:</strong>
                  <br /> Contact Car Clinic to book an appointment for your car
                  repair. Provide them with the necessary details about your
                  vehicle and the repair required.
                </li>

                <li className="pb-2">
                  <strong>Receive the tracking ID: </strong>
                  <br /> Once your repair appointment is confirmed, Car Clinic
                  will assign a unique tracking ID to your repair order. This ID
                  serves as a reference for tracking the progress of your
                  repair.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <SmallHeading size="sm">Forgot your tracking ID?</SmallHeading>
            </AccordionTrigger>
            <AccordionContent>
              <p className="underline underline-offset-1 pb-2">
                Follow these simple steps to retrieve your tracking ID:
              </p>

              <ul className="list-disc">
                <li className="pb-2">
                  <strong>Contact Car Clinic:</strong>
                  <br /> Reach out to the and talk to an agent about your
                  forgotten tracking ID and request for assistance in retrieving
                  it.
                </li>

                <li className="pb-2">
                  <strong>Provide necessary information:</strong>
                  <br /> Car Clinic will ask for specific details to verify your
                  identity and retrieve your tracking ID. Be prepared to provide
                  information such as your name, contact details, and any
                  relevant information about your car.
                </li>

                <li className="pb-2">
                  <strong>Assistance from customer support:</strong>
                  <br /> After verifying your identity, Car Clinic&apos;s
                  customer support team will assist you in retrieving your
                  tracking ID instantly.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <SmallHeading size="sm">
                Do I have to pay for this service?
              </SmallHeading>
            </AccordionTrigger>
            <AccordionContent>No, it&apos;s totally free.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
