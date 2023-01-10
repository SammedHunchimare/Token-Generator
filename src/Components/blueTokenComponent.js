import React from "react";
import "./style.css";

function BlueToken({ tokensData }) {
  return (
    <div className="blueMain">
      <h4 className="blue-heading">
        Blue Tokens (
        {tokensData.blueTokens ? tokensData?.blueTokens?.length : "0"})
      </h4>
      <div
        className="tokenGrid"
        style={{
          gridTemplateColumns: `repeat(${tokensData?.numOfRows?.blue}, 50px) `,
        }}
      >
        {tokensData.blueTokens &&
          tokensData?.blueTokens?.map((item, ind) => {
            return (
              <div key={ind}>
                <div className="blueGrid">
                  <p>{tokensData?.Prefix?.bluePrefix + "" + item}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default BlueToken;
