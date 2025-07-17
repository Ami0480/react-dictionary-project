import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        {" "}
        <p className="definition">
          {props.meaning.definitions[0].definition}
          <br />

          <em className="example">
            {props.meaning.definitions?.[0]?.example || "No example available."}
          </em>
          <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </p>
      </div>
    </div>
  );
}
