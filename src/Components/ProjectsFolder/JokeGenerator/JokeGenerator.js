import React, { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./JokeGenerator.css";
import Joke from "./Joke";
import axios from "axios";

const JokeGenerator = () => {
  const [jokesArray, setJokeArray] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  async function fetchData() {
    setIsloaded(true);
    const newArray = [];

    for (let i = 0; i < 10; i++) {
      setIsloaded(true);
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      newArray.push({ id: i, joke: res.data.joke, vote: 0 });
    }
    setJokeArray(newArray);
    setIsloaded(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const updateVote = (id, updatedVote) => {
    setJokeArray(
      jokesArray.map((eachJoke) => {
        if (eachJoke.id === id) eachJoke.vote = updatedVote;
        return eachJoke;
      })
    );
  };

  const sortedJokes = jokesArray.sort((a, b) => b.vote - a.vote);

  if (isloaded) {
    return (
      <div id="joke-loader" className="container-fluid">
        <FadeLoader
          color={"#f5f6fa"}
          loading="loading"
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="joke-generator container-fluid">
        <div className="col-left col-lg-3 col-12">
          <h2 className="title">
            DAD <span className="fw-normal">Jokes</span>
          </h2>
          {/* <img 
            src="https://em-content.zobj.net/thumbs/120/samsung/349/grinning-face_1f600.png" 
            width={200}
            alt="emo" /> */}

          <span
            style={{
              textShadow:
                "rgba(0, 0, 0, 0.22) 0px 2px 3px, rgba(0, 0, 0, 0.24) 0px 2px 3px",
              fontSize: "12rem",
            }}
          >
            🎭
          </span>

          <button onClick={() => fetchData()}>New Jokes</button>
        </div>
        <div className="col-right col-lg-8 col-12">
          {sortedJokes.map((eachJoke) => {
            return (
              <Joke
                key={eachJoke.id}
                id={eachJoke.id}
                joke={eachJoke.joke}
                vote={eachJoke.vote}
                updateVote={updateVote}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default JokeGenerator;
