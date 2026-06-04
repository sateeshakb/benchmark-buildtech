import {
  Html,
  Body,
  Head,
  Heading,
  Text,
  Section,
  Row,
  Column,
  Hr,
  Preview,
} from "react-email";

export default function ConsultationRequest({ name, email, phone, message }) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New consultation request from {name}</Preview>
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <Section
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "32px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Heading
            style={{ color: "#C41E1E", fontSize: "24px", marginBottom: "8px" }}
          >
            New Consultation Request
          </Heading>
          <Text style={{ color: "#666", marginTop: "0" }}>
            Benchmark Buildtech — Free Consultation Form
          </Text>

          <Hr style={{ borderColor: "#E8B820", margin: "24px 0" }} />

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                NAME
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {name}
              </Text>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                EMAIL
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {email}
              </Text>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                PHONE
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {phone}
              </Text>
            </Column>
          </Row>

          {message && (
            <Row>
              <Column>
                <Text
                  style={{
                    color: "#999",
                    fontSize: "12px",
                    marginBottom: "4px",
                  }}
                >
                  MESSAGE
                </Text>
                <Text
                  style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
                >
                  {message}
                </Text>
              </Column>
            </Row>
          )}

          <Hr style={{ borderColor: "#E8B820", margin: "24px 0" }} />

          <Text
            style={{ color: "#999", fontSize: "12px", textAlign: "center" }}
          >
            Benchmark Buildtech — Luxurious Interior Design
          </Text>
        </Section>
      </Body>
    </Html>
  );
}
