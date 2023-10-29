import React from "react";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";

function Cards() {
  return (
    <Container className="py-4">
    <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="text-center">الباقات الشهرية</h1>
          <p className="text-center">نوفر لطلابنا ثلاث باقات شهرية اشترك في ما يناسبك.واحصل على حصة تجريبية مجاناٌ</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <Card style={{ backgroundColor: "#f0f8ff", borderColor: "#add8e6" }}>
            <Card.Body>
              <Card.Title tag="h5">الباقة الأولى</Card.Title>
              <Card.Text>
              <ul>
              <li>4 ساعات في الشهر </li>
              <li>2 محاضرتين اسبوعياٌ</li>
              <li>يحق للطالب 1/2 ساعة في الحصة</li>
              
              </ul>
              </Card.Text>
              <Button variant="success" href="https://wa.me/01123607819">
                <i className="fab fa-whatsapp"></i>أحجز الأن
              </Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#f5f5dc", borderColor: "#deb887" }}>
            <Card.Body>
              <Card.Title tag="h5">الباقة الثانية</Card.Title>
              <Card.Text>
                <ul>
                    <li>6 ساعات في الشهر </li>
                    <li>3 محاضرات اسبوعياٌ </li>
                    <li>يحق للطالب 1/2 ساعة في الحصة</li>
                    </ul>
              </Card.Text>
              <Button variant="success" href="https://wa.me/01123607819">
                <i className="fab fa-whatsapp"></i>أحجز الأن
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#e6e6fa", borderColor: "#9370db" }}>
            <Card.Body>
              <Card.Title tag="h5">الباقة الثالثة</Card.Title>
              <Card.Text>
                <ul>
                <li>8 ساعات في الشهر </li>
                <li> 4 محاضرات اسبوعياٌ </li>
                <li>يحق للطالب 1/2 ساعة في الحصة</li>
                </ul>
              </Card.Text>
              <Button variant="success" href="https://wa.me/01123607819">
                <i className="fab fa-whatsapp"></i>أحجز الأن
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
