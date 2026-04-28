import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        backgroundColor: "#f4f4f5",
        padding: "40px 0",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "580px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            padding: "36px 40px",
            textAlign: "center" as const,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: "0 0 6px 0", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
            Portfolio Contact
          </p>
          <h1 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: 0 }}>
            New Message Received
          </h1>
        </div>

        {/* Body */}
        <div style={{ padding: "36px 40px" }}>
          <p style={{ color: "#52525b", fontSize: "15px", lineHeight: 1.6, margin: "0 0 28px 0" }}>
            Hey Pramada, someone reached out through your portfolio. Here are their details:
          </p>

          {/* Info Cards */}
          <div style={{ marginBottom: "28px" }}>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Reason" value={subject} />
          </div>

          {/* Message Box */}
          <div
            style={{
              backgroundColor: "#fafafa",
              border: "1px solid #e4e4e7",
              borderLeft: "4px solid #6366f1",
              borderRadius: "8px",
              padding: "20px 24px",
              marginBottom: "28px",
            }}
          >
            <p style={{ color: "#71717a", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 0 10px 0" }}>
              Message
            </p>
            <p style={{ color: "#18181b", fontSize: "15px", lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" as const }}>
              {message}
            </p>
          </div>

          {/* Reply CTA */}
          <div style={{ textAlign: "center" as const }}>
            <a
              href={`mailto:${email}`}
              style={{
                display: "inline-block",
                backgroundColor: "#6366f1",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: "10px",
              }}
            >
              Reply to {name.split(" ")[0]}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #f0f0f0",
            padding: "20px 40px",
            textAlign: "center" as const,
            backgroundColor: "#fafafa",
          }}
        >
          <p style={{ color: "#a1a1aa", fontSize: "12px", margin: 0 }}>
            Sent from your portfolio contact form
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper row component
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px solid #f4f4f5",
      }}
    >
      <span style={{ color: "#71717a", fontSize: "13px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", minWidth: "80px" }}>
        {label}
      </span>
      <span style={{ color: "#18181b", fontSize: "14px", fontWeight: 500, textAlign: "right" as const }}>
        {value}
      </span>
    </div>
  );
}