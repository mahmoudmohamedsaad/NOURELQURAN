import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageGallery() {
  // An array of image URLs

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5N5kL153zP9egeKsseknhHRmDHfmyYJToxA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5N5kL153zP9egeKsseknhHRmDHfmyYJToxA&usqp=CAU",
    "https://media.gemini.media/img/large/2014/12/23/2014_12_23_21_40_26_84.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI72aPl6sk5Gd8CmXekFNBhSZiNNEECUUT7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOKVwELUQnqCR2RWC7lvWfivOHPv6N_Kr5Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOKVwELUQnqCR2RWC7lvWfivOHPv6N_Kr5Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3KcZtkNoa0Kh5Jr9UDJNg327Am5hLBC1iQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfn8RngbiaJHAllOUfvUEQml9AHKM9fT2DsQ&usqp=CAU",
    
    
    
  ];

  // A function to render each image in a column
  const renderImage = (url, index) => {
    return (
      <Col key={index} xs={6} md={4} lg={3}>
        <Image src={url} thumbnail />
      </Col>
    );
  };

  return (
    <Container className="bg-light py-4">
    <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="text-center">أراء عملائنا</h1>
          <p className="text-center">نفتخر بأراء عملائنا ونتطلع للأفضل .</p>
        </Col>
      </Row>
      <Row >
        {images.map(renderImage)}
      </Row>
    </Container>
  );
}

export default ImageGallery;
