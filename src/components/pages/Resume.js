import React from 'react';
import "../../styles/Resume.css";
import pdf from "../images/resume.pdf"

export default function Resume() {
  return (
    <div className="Resume">
      <h1>Customer Reviews</h1>
      
      <p>
        <li>Rick says, "The refund process was simple and easy. Thanks Anthony!"</li>
        <li>Jen wrote, "It's great this company gives back and is Vet owned."</li>
        <li>Sean left, "This is the type of community outreach I'm looking for!"</li>
        <li>Kelly said, "These vending machines always have the best cookies!"</li>
      </p>
    </div>
  );
}
