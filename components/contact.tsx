"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 overflow-hidden"
    >
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
            className="bg-background border border-border p-8 rounded-3xl shadow-sm"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  className="bg-muted/30 border-none rounded-xl h-12"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-muted/30 border-none rounded-xl h-12"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-muted/30 border-none rounded-xl h-12"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-muted/30 border-none rounded-xl min-h-38"
              />
              <Button className="w-full h-12 rounded-xl text-white font-bold gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}