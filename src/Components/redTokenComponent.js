import React from "react";
import "./style.css";

function RedToken({ tokensData }) {
  return (
    <div className="redMain">
      <h4 className="red-heading">
        Red Tokens ({tokensData.redTokens ? tokensData?.redTokens?.length : "0"}
        )
      </h4>
      <div
        className="tokenGrid"
        style={{
          gridTemplateColumns: `repeat(${tokensData?.numOfRows?.red}, 50px) `,
        }}
      >
        {tokensData.redTokens &&
          tokensData?.redTokens?.map((item, ind) => {
            return (
              <div key={ind}>
                <div className="redGrid">
                  <p>{tokensData.Prefix.redPrefix + "" + item}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RedToken;
