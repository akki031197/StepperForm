import React from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionComponent = () => {
  return (
    <Accordion alwaysOpen>
      <Card>
        <Card.Header as="h2" className="bg-gray-500 text-white">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Accordion Item #1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header as="h2" className="bg-gray-500 text-white">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Accordion Item #2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <strong>This is the second item's accordion body.</strong> It is
            shown by default.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header as="h2" className="bg-gray-500 text-white">
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Accordion Item #3
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <strong>This is the third item's accordion body.</strong> It is
            shown by default.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionComponent; // Add the export statement
