import React, { useState, useEffect } from "react";
import "./Dictionary.css";

import { AiOutlineDown } from "react-icons/ai";
import { BsToggleOn, BsFillPlayCircleFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { BiBookAlt, BiSearch } from "react-icons/bi";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (word !== "") {
      searchWord();
    }
  }, [word]);

  const searchWord = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
      );

      if (!response.ok) {
        throw new Error("Word not found");
      }

      const data = await response.json();
      setResults(data[0]);
    } catch (error) {
      setError("Word not found");
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (results) {
      return (
        <div className="explanation">
          {results.meanings.map((meaning, index) => (
            <div key={index}>
              <h3 style={{ padding: "1em 0 1em 0" }}>{meaning.partOfSpeech}</h3>
              <h3 style={{ padding: "0 0 1em 0", color: "grey" }}>
                Meaning
              </h3>{" "}
              <p style={{ padding: "0 0 1em 0" }}>
                {meaning.definitions[0].definition}
              </p>
              {meaning.synonyms && meaning.synonyms.length > 0 && (
                <h3 style={{ color: "grey" }}>
                  Synonyms
                  <span style={{ color: "purple" }}>
                    {" - "}
                    {meaning.synonyms.join(", ")}
                  </span>
                </h3>
              )}
            </div>
          ))}
          <p style={{ padding: "0 0 5em 0", color: "grey" }}>
            <br />
            Source :{"   "}
            <a href=" https://en.wiktionary.org/wiki/keyboard">
              Learn more : https://en.wiktionary.org/wiki/keyboard
            </a>
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="item1">
            <BiBookAlt size="40" color="grey" />
          </div>
          <div className="sub">
            <div className="item2">
              Serif <AiOutlineDown size="20" color="grey " />
            </div>
            <div className="item3">
              <BsToggleOn size="35" color="grey" />
              <MdDarkMode size="35" color="grey" />
            </div>
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="search-input"
          />
          <BiSearch
            className="search-icon"
            onClick={searchWord}
            color="purple"
            size="30"
          />
        </div>
        <div className="playcontainer">
          {word}
          <BsFillPlayCircleFill
            color="purple"
            style={{ position: "absolute", right: "0" }}
          />
          {}
        </div>
        <span className="pronounce">{results && results.pronunciation}</span>

        {renderResults()}
      </div>
    </div>
  );
};

export default Dictionary;
