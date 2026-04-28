"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card, CardContent } from "./ui/card";
import { Field, FieldError, FieldGroup } from "./ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
import { Spinner } from "./ui/spinner";

const FormSchema = z.object({
  fullname: z.string().min(10, "Username must be at least 10 characters"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject must be at least 10 characters."),
  message: z
    .string()
    .min(10, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

type FormData = z.infer<typeof FormSchema>;

export default function Contact() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Message Sent", {
        description: "Your message has been sent.",
      });
      //Reset form
      form.reset();
    } else {
      toast.error("Failed to send message");
    }
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Contact Info</h3>
                <p className="border-l-4 border-primary pl-4 py-2 text-muted-foreground text-justify leading-relaxed my-4">
                  I am currently open to new opportunities and collaborations.
                  Whether you have a question or just want to say hi, I will try
                  my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">
                      Email
                    </p>
                    <p className="font-medium">pramadashrestha17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">
                      Phone
                    </p>
                    <p className="font-medium">+977 9841206364</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold">
                      Address
                    </p>
                    <p className="font-medium">Dhapakhel, Lalitpur</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-background border border-border px-2 md:px-4 py-6 md:py-8 rounded-3xl shadow-sm">
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Controller
                        name="fullname"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              placeholder="Name"
                              className="bg-muted/30 border-none rounded-xl"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              placeholder="Email"
                              className="bg-muted/30 border-none rounded-xl"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </div>

                    <Controller
                      name="subject"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <Input
                            {...field}
                            aria-invalid={fieldState.invalid}
                            placeholder="Subject"
                            className="bg-muted/30 border-none rounded-xl"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <InputGroup className="bg-muted/30 border-none rounded-xl min-h-38">
                            <InputGroupTextarea
                              {...field}
                              rows={6}
                              placeholder="Your Message"
                              aria-invalid={fieldState.invalid}
                            />
                            <InputGroupAddon align="block-end">
                              <InputGroupText className="tabular-nums text-xs font-normal text-muted-foreground/50">
                                {field.value.length}/100 characters
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>

                  <Field orientation="horizontal">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full h-12 rounded-xl text-white font-bold gap-2"
                    >
                      {form.formState.isSubmitting ? (
                        <div className="flex gap-2 items-center justify-center">
                          <Spinner />
                          <p> Sending Message...</p>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </Field>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
