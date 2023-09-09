import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {Container, Row, Col } from "reactstrap";

function Axios() {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        axios.get("Js/data.json")
        .then((res) => {
            // console.log(res);
            setCourses(res.data.courses)
        })

      }, [])

      const courseList = courses.map((course) => {
        return (
            <Col >
            <Card lg={3} md={6} xl={3} key={course.id}>
                <CardBody>
                    <CardTitle tag="h5">{course.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{course.Instructor}</CardSubtitle>
                    <CardText>{course.lang}</CardText>
                    <video controls width="300px" muted>
                        <source src={course.link} />
                    </video>
                </CardBody>
            </Card>
            </Col>
        )        
      })

      return (
          <Container fluid>
              <Row>{courseList}</Row>
          </Container>
      )
}
export default Axios