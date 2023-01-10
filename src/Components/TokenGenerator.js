import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import BlueToken from "./blueTokenComponent";
import RedToken from "./redTokenComponent";
import "./style.css";
function TokenGenerator() {
  const [tokensData, setTokensData] = useState([]);
  const [numOfToken, setNumOfToken] = useState({
    blueTokens: "",
    redTokens: "",
  });
  const [Prefix, setPrefix] = useState({ bluePrefix: "", redPrefix: "" });
  const [numOfRows, setNumOfRows] = useState({ blue: "", red: "" });

  function handleToken(e) {
    e.preventDefault();
    let blueTokens = [];
    let redTokens = [];
    for (let i = 1; i <= numOfToken.redTokens; i++) {
      redTokens.push(i);
    }
    for (let j = 1; j <= numOfToken.blueTokens; j++) {
      blueTokens.push(j);
    }
    setTokensData((prev) => {
      return {
        ...prev,
        blueTokens,
        redTokens,
        Prefix,
        numOfRows,
      };
    });
  }
  function handleClearToken() {
    setTokensData((prev) => {
      return {
        ...prev,
        blueTokens: "",
        redTokens: "",
        Prefix: "",
        numOfRows: "",
      };
    });
    setNumOfToken({ blueTokens: "", redTokens: "" });
    setPrefix({ bluePrefix: "", redPrefix: "" });
    setNumOfRows({ blue: "", red: "" });
  }
  return (
    <div className="main">
      <form autoComplete="off" onSubmit={(e) => handleToken(e)}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <h1 className="heading"> Token Generator Application</h1>
          <div className="container">
            <label className="inputLabel"> Red Token :</label>
            <TextField
              required
              id="outlined-name"
              label="Number Of Tokens"
              type="number"
              value={numOfToken.redTokens}
              onChange={(e) =>
                setNumOfToken((prev) => {
                  return {
                    ...prev,
                    redTokens: e.target.value,
                  };
                })
              }
            />
            <TextField
              required
              id="outlined-name"
              label="Prefix"
              type="text"
              value={Prefix.redPrefix}
              onChange={(e) =>
                setPrefix((prev) => {
                  return {
                    ...prev,
                    redPrefix: e.target.value,
                  };
                })
              }
            />
            <TextField
              required
              id="outlined-name"
              label="Number Of Rows"
              type="number"
              value={numOfRows.red}
              onChange={(e) =>
                setNumOfRows((prev) => {
                  return {
                    ...prev,
                    red: e.target.value,
                  };
                })
              }
            />
          </div>
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <div className="container">
            <label className="inputLabel"> Blue Token :</label>
            <TextField
              id="outlined-name"
              label="Number Of Tokens"
              type="number"
              required
              value={numOfToken.blueTokens}
              onChange={(e) =>
                setNumOfToken((prev) => {
                  return {
                    ...prev,
                    blueTokens: e.target.value,
                  };
                })
              }
            />
            <TextField
              id="outlined-name"
              label="Prefix"
              type="text"
              required
              value={Prefix.bluePrefix}
              onChange={(e) =>
                setPrefix((prev) => {
                  return {
                    ...prev,
                    bluePrefix: e.target.value,
                  };
                })
              }
            />
            <TextField
              id="outlined-name"
              label="Number Of Rows"
              type="number"
              required
              value={numOfRows.blue}
              onChange={(e) =>
                setNumOfRows((prev) => {
                  return {
                    ...prev,
                    blue: e.target.value,
                  };
                })
              }
            />
          </div>
        </Box>

        <div className="buttonContainer">
          <Button
            variant="contained"
            type="submit"
            style={{ marginRight: "20px" }}
          >
            Generate
          </Button>
          <Button variant="outlined" onClick={() => handleClearToken()}>
            Clear
          </Button>
        </div>

        <div className="resultContainer">
          <RedToken tokensData={tokensData} />
          <BlueToken tokensData={tokensData} />
        </div>
      </form>
    </div>
  );
}

export default TokenGenerator;
