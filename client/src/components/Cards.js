import React from "react";
import { Card } from "semantic-ui-react";
import "./CardsDiv.scss";

export function ACard(props) {
  return (
    <Card className="card">
      <a href={"https://www.google.com/search?q=" + props.name}>{props.name}</a>
      <p>{"Country: " + props.country}</p>
      <p>{"Searches: " + props.searches}</p>
      <p>{"Id: " + props.id}</p>
    </Card>
  );
}
