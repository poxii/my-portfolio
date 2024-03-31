import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'left' }}>
            Hi, everyone, I'm Wilcox Ekente.
            <br />
            I am a Results-driven JavaScript Full-stack Developer with a specialization and strong inclination toward
            backend development.
            <br />
            6+ years of proven expertise in designing and implementing robust server-side applications while maintaining
            proficiency in front-end technologies.
            <br />
            <br />
            Adept at leveraging advanced JavaScript frameworks and libraries for optimal performance and scalability.
            Strong analytical and problem-solving skills combined with effective communication and collaborative
            abilities.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
