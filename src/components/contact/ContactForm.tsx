"use client";

import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import Paragraph from "../ui/Paragraph";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainButton from "../ui/MainButton";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ContactFormProps {}

type FormData = {
  name: string;
  email: string;
  phone: any;
  subject: string;
  message: string;
};

const ContactForm: FC<ContactFormProps> = ({}) => {
  const { push } = useRouter();

  const phoneRegExp = /^[0-9]{9,15}$/;

  const contactFormSchema = z.object({
    name: z.string().min(1, "Name is Required").min(2, "Name is too short").max(50, "Name is too long"),
    email: z.string().min(1, "Email is Required").email("Invalid email"),
    phone: z
      .string()
      .min(1, "Phone Number is Required")
      .refine((value) => phoneRegExp.test(value), "Invalid phone number"),
    subject: z.string().min(1, "Subject is Required").min(5, "Subject is too short").max(100, "Subject is Too long"),
    message: z.string().min(1, "Message is Required").min(10, "Message is too short").max(500, "Message is too long"),
  });

  const resolver = zodResolver(contactFormSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = (data: FormData, e: any) => {
    console.log(data);
  };

  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="bg-white shadow-lg rounded-lg w-full p-8 sm:p-16">
          <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col items-center gap-4 mb-12">
              <SmallHeading size="lg" className="text-center">
                Get In Touch!
              </SmallHeading>

              <Paragraph className="text-center leading-loose">Contact us with your details & ready to start with us</Paragraph>
            </div>
          </div>

          <div className="w-full contact-form" data-aos="zoom-in" data-aos-delay="150" data-aos-once="true">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid  grid-cols-12 gap-6 w-full">
                <div className="form-group col-span-12 sm:col-span-6 flex flex-col">
                  <label>Name *</label>
                  <input type="text" placeholder="E.g Jon Doe" className="form-control" {...register("name")} name="name" />
                  {errors.name && typeof errors.name.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div className="form-group  col-span-12 sm:col-span-6 flex flex-col">
                  <label className="">Email *</label>
                  <input
                    type="text"
                    placeholder="E.g jondoe@gmail.com"
                    className="form-control"
                    {...register("email")}
                    name="email"
                  />
                  {errors.email && typeof errors.email.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group  col-span-12 sm:col-span-6 flex flex-col">
                  <label className="">Phone *</label>
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    {...register("phone")}
                    name="phone"
                  />
                  {errors.phone && typeof errors.phone.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div className="form-group  col-span-12 sm:col-span-6 flex flex-col">
                  <label className="">Subject *</label>
                  <input
                    type="text"
                    placeholder="Enter message subject"
                    className="form-control"
                    {...register("subject")}
                    name="subject"
                  />
                  {errors.subject && typeof errors.subject.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                <div className="col-span-12 flex flex-col form-group">
                  <label>Message *</label>
                  <textarea
                    className="form-control"
                    placeholder="Type your message here"
                    {...register("message")}
                    name="message"
                  />
                  {errors.message && typeof errors.message.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
              </div>
              <MainButton text="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
