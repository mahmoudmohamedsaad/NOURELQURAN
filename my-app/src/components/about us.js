import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container fluid className="bg-light py-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="text-center">ماذا عنا</h1>
          <p className="text-center">فى ظل تطور التكنولوجيا نسعي لتعليم وتحفيظ القرءان الكريم اونلاين وبأحكام التجويد.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} sm={7} md={5} lg={4}>
          <Card className="mb-4">
            
            <Card.Body>
              <Card.Title>رؤية الأكاديمية</Card.Title>
              <Card.Text>تعليم القرآن بمفهومه الواسع والذي يشمل تعليم أحكام التلاوة والترتيل والتحفيظ والتفسير والتدبر وصولا إلى العمل ؛ وذلك بأفضل الوسائل التربوية وأحسن الطرق التعليمية.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={7} md={5} lg={4}>
          <Card className="mb-4">
            
            <Card.Body>
              <Card.Title>رسالة الأكاديمية</Card.Title>
              <Card.Text>الرقي والتميز في تعليم القرآن الكريم ، والإبداع في غرسه قيمه لجميع شرائح المجتمع بكوادر متميزة وبرامج نوعية ، وبيئة محفزة بتقنية حديثة.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={7} md={5} lg={4}>
          <Card className="mb-4">
            
            <Card.Body>
              <Card.Title>أهداف الأكاديمية</Card.Title>
              <Card.Text>التطلع لأن تكون الأكاديمية صرحا قرآنيا نموذجيا رائدا في كل المجالات المتعلقة بتعليم القرآن الكريم.و تعليم القرآن الكريم بمفهومه الواسع بأفضل الخطط والبرامج.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
