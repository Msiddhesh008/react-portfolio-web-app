import React, { useState } from "react";

const Joke = ({ joke, vote, id, updateVote }) => {
  const [emoji, setEmoji] = useState("😐");

  const getEmoji = () => {
    if (vote <= 5) {
      return setEmoji("😐");
    } else if (vote > 5 && vote <= 10) {
      return setEmoji("😃");
    } else if (vote > 10 && vote <= 15) {
      return setEmoji("😄");
    } else if (vote > 15 && vote <= 20) {
      return setEmoji("😆");
    } else if (vote > 20) {
      return setEmoji("🤣");
    }
  };

  return (
    <div className="joke p-2">
      <div className="level-cnt fw-bold">
        <i
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateVote(id, vote + 1);
            getEmoji();
          }}
          className="bi bi-arrow-up-short fs-2"
        ></i>
        <span>{vote}</span>
        <i
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateVote(id, vote - 1);
            getEmoji();
          }}
          className="bi bi-arrow-down-short fs-2"
        ></i>
      </div>
      <div className="text-cnt">
        <span>{joke}</span>
      </div>
      <div className="emoji-cnt">
        {/* <img 
        width={45}
        src={emoji} alt="" /> */}
        <span
          style={{
            textShadow:
              "rgba(0, 0, 0, 0.22) 0px 1px 2px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            fontSize: "2.5rem",
          }}
        >
          {emoji}
        </span>
      </div>
    </div>
  );
};

export default Joke;

// 1 https://em-content.zobj.net/source/skype/289/neutral-face_1f610.png
// 2 https://em-content.zobj.net/source/skype/289/expressionless-face_1f611.png
// 3 https://em-content.zobj.net/source/skype/289/slightly-smiling-face_1f642.png
// 4 https://em-content.zobj.net/source/skype/289/grinning-face-with-smiling-eyes_1f604.png
// 5 https://em-content.zobj.net/source/skype/289/grinning-squinting-face_1f606.png
// 6 https://em-content.zobj.net/source/skype/289/rolling-on-the-floor-laughing_1f923.png
