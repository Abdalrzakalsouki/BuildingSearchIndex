import React from "react";
import { Card, Heading, Text } from "evergreen-ui";
import "../App.css";

export default function Result(props) {
  return (
    <div>
      {props.result.map((building) => (
        <Card
          id="resultcard"
          elevation={4}
          float="left"
          width={400}
          height={120}
          marginRight={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#F1FBFC"
        >
          <Heading>{building.name}</Heading>
          <Text size={200} fontWeight="{bold}" color="#234361">
            {building.location}
          </Text>
          <Text size={200} fontWeight="{bold}" color="#234361">
            {building.number}
          </Text>
          <Text size={200} fontWeight="{bold}" color="#234361">
            {building.result}
          </Text>
        </Card>
      ))}
    </div>
  );
}