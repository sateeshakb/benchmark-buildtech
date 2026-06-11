import {
  Html,
  Head,
  Body,
  Preview,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
} from "react-email";

export default function QualifiedLeadEmail({
  name,
  email,
  phone,
  city,
  propertyType,
  propertyStatus,
  carpetArea,
  startTimeline,
  designerStatus,
}) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New Project Inquiry from {name}</Preview>
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
            New Project Inquiry
          </Heading>
          <Text style={{ color: "#666", marginTop: "0" }}>
            Benchmark Buildtech — Qualified Lead Form
          </Text>

          <Hr style={{ borderColor: "#E8B820", margin: "24px 0" }} />

          {/* Basic Details */}
          <Text
            style={{
              color: "#C41E1E",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            BASIC DETAILS
          </Text>

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
                PHONE
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {phone}
              </Text>
            </Column>
          </Row>

          {email && (
            <Row>
              <Column>
                <Text
                  style={{
                    color: "#999",
                    fontSize: "12px",
                    marginBottom: "4px",
                  }}
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
          )}

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                CITY
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {city}
              </Text>
            </Column>
          </Row>

          <Hr style={{ borderColor: "#E8B820", margin: "24px 0" }} />

          {/* Property Details */}
          <Text
            style={{
              color: "#C41E1E",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            PROPERTY DETAILS
          </Text>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                TYPE OF PROPERTY
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {propertyType}
              </Text>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                PROPERTY STATUS
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {propertyStatus}
              </Text>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                CARPET AREA (SQ.FT.)
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {carpetArea}
              </Text>
            </Column>
          </Row>

          <Hr style={{ borderColor: "#E8B820", margin: "24px 0" }} />

          {/* Planning Stage */}
          <Text
            style={{
              color: "#C41E1E",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            INTERIOR PLANNING STAGE
          </Text>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                PLANNING TO START
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {startTimeline}
              </Text>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text
                style={{ color: "#999", fontSize: "12px", marginBottom: "4px" }}
              >
                DESIGNER STATUS
              </Text>
              <Text
                style={{ color: "#1C1210", fontSize: "16px", marginTop: "0" }}
              >
                {designerStatus}
              </Text>
            </Column>
          </Row>

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
