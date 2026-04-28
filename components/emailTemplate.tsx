import { Html, Text, Body, Hr, Head, Preview } from "@react-email/components";
import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <Text>Hey Pramada, you have a new message from your portfolio.</Text>

        <Hr />

        <Text>From: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>Subject: {subject}</Text>
        <Text>Message: {message}</Text>

        <Hr />

        <Text style={{ color: "#888", fontSize: "12px" }}>
          Sent from your portfolio contact form.
        </Text>
      </Body>
    </Html>
  );
}