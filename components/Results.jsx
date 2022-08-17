import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ fetchResults }) => {
  return (
    <div>
      {fetchResults.map((result) => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </div>
  );
};

export default Results;
