import React from "react";
import "./Dictionary.css";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Dictionary = () => {
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
              <RxDividerVertical size="30" color="grey " />
            </div>
            <div className="item3">
              <BsToggleOn size="35" color="grey" />
              <MdDarkMode size="35" color="grey" />
            </div>
          </div>
        </div>

        <button class="btn">
          keyboard
          <BiSearch color="purple" />
        </button>

        <div className="playcontainer">
          keyboard
          <BsFillPlayCircleFill color="purple" />
        </div>

        <div className="explanation">
          <h3 style={{ padding: "1em 0 1em 0" }}>noun</h3>
          <h3 style={{ padding: "0 0 1em 0", color: "grey" }}>Meaning</h3>
          <li style={{ padding: "0 0 1em 0" }}>
            (etc.)A set of keys used to operate a typewriter, computer etc.
          </li>
          <li style={{ padding: "0 0 1em 0" }}>
            A component of many instruments including the piano and harspsichord
            consisting of usual black and white keys that cause that cause
            diffrent tones to be produced when stuck.
          </li>
          <li style={{ padding: "0 0 2em 0" }}>
            A device with key of musical keyboard, used to control eloctronic
            sound produced when struck. . A device with keys of musical keyboard
            producing devices which may be built into or seperate fromthe
            keyboarcd device
          </li>
          <h3 style={{ color: "grey" }}>
            Synonyms
            <span style={{ color: "purple" }}> electronic keyboard</span>
          </h3>
          <h3 style={{ padding: "1em 0 1em 0" }}>verb</h3>
          <h3 style={{ color: "grey", padding: "0 0 1em 0" }}>Meaning</h3>
          <li>To type on a computer keyboard.</li>
          <p style={{ color: "grey", padding: "1em 0 2em 1em" }}>
            "Keyboarding the part of this job I hate the most."
          </p>
          <p style={{ padding: "0 0 5em 0", color: "grey" }}>
            Source :
            <a href="https://en.wiktionary.org/wiki/keyboard">
              https://en.wiktionary.org/wiki/keyboard
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
