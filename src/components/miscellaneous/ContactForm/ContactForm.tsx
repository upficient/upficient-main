"use client";

import { contactUs } from "@/services/user.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

// Zod Schema for validation
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(1, "Subject is required."),
  about: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (formData: ContactFormInputs) => {
    setLoading(true);
    try {
      await contactUs(formData);
      toast.success("Thank you for reaching out! Your message has been sent successfully.");
      reset();
    } catch (err) {
      toast.error("Oops! Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoaderComponent />}
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            aria-required="true"
            aria-invalid={errors.subject ? "true" : "false"}
          />
          {errors.subject && <span className="error">{errors.subject.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="about">Tell Us About Your Project (Optional)</label>
          <textarea
            id="about"
            {...register("about")}
            aria-required="false"
            aria-invalid="false"
          ></textarea>
        </div>
        <div className="form-group privacy">
          <input type="checkbox" id="privacy" required />
          <label htmlFor="privacy">
            I agree to the terms of this Privacy Policy
          </label>
        </div>
        <div className="form-group">
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
