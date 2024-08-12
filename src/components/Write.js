import React, { useState } from "react";
import app from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database";

export default function Write() {
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue1option1, setInputValue1option1] = useState("");
  let [inputValue1option2, setInputValue1option2] = useState("");
  let [inputValue1option3, setInputValue1option3] = useState("");
  let [inputValue1option4, setInputValue1option4] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue2option1, setInputValue2option1] = useState("");
  let [inputValue2option2, setInputValue2option2] = useState("");
  let [inputValue2option3, setInputValue2option3] = useState("");
  let [inputValue2option4, setInputValue2option4] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue3option1, setInputValue3option1] = useState("");
  let [inputValue3option2, setInputValue3option2] = useState("");
  let [inputValue3option3, setInputValue3option3] = useState("");
  let [inputValue3option4, setInputValue3option4] = useState("");
  let [inputValue4, setInputValue4] = useState("");
  let [inputValue4option1, setInputValue4option1] = useState("");
  let [inputValue4option2, setInputValue4option2] = useState("");
  let [inputValue4option3, setInputValue4option3] = useState("");
  let [inputValue4option4, setInputValue4option4] = useState("");
  let [inputValue5, setInputValue5] = useState("");
  let [inputValue5option1, setInputValue5option1] = useState("");
  let [inputValue5option2, setInputValue5option2] = useState("");
  let [inputValue5option3, setInputValue5option3] = useState("");
  let [inputValue5option4, setInputValue5option4] = useState("");

  const savaData = async () => {
    const db = getDatabase(app);
    const newPostKey = push(ref(db, "posts/questions"));
    set(newPostKey, {
      question1: inputValue1,
      question1option1: inputValue1option1,
      question1option2: inputValue1option2,
      question1option3: inputValue1option3,
      question1option4: inputValue1option4,
      question2: inputValue2,
      question2option1: inputValue2option1,
      question2option2: inputValue2option2,
      question2option3: inputValue2option3,
      question2option4: inputValue2option4,
      question3: inputValue3,
      question3option1: inputValue3option1,
      question3option2: inputValue3option2,
      question3option3: inputValue3option3,
      question3option4: inputValue3option4,
      question4: inputValue4,
      question4option1: inputValue4option1,
      question4option2: inputValue4option2,
      question4option3: inputValue4option3,
      question4option4: inputValue4option4,
      question5: inputValue5,
      question5option1: inputValue5option1,
      question5option2: inputValue5option2,
      question5option3: inputValue5option3,
      question5option4: inputValue5option4,
    })
      .then(() => {
        alert("Questions Saved");
      })
      .catch((error) => {
        alert("error:", error.message);
      });
    //   const postData = {
    //     question: inputValue1,
    //     answer: inputValue2
    //   };
    //   const updates = {};
    //   updates['/posts/' + newPostKey] = postData;
    //   return set(ref(db), updates);
  };
  return (
    <div className="Write_page">
      <h1>Add Questions</h1>
      <div className="felx">
        <div>
          <label>Question1</label>
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />
        </div>
        <div>
          <ol>
            <li>
              <input
                type="text"
                value={inputValue1option1}
                onChange={(e) => setInputValue1option1(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue1option2}
                onChange={(e) => setInputValue1option2(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue1option3}
                onChange={(e) => setInputValue1option3(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue1option4}
                onChange={(e) => setInputValue1option4(e.target.value)}
              />
            </li>
          </ol>
        </div>
      </div>
      <div>
        <label>Question2</label>
        <input
          type="text"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
        <div>
          <ol>
            <li>
              <input
                type="text"
                value={inputValue2option1}
                onChange={(e) => setInputValue2option1(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue2option2}
                onChange={(e) => setInputValue2option2(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue2option3}
                onChange={(e) => setInputValue2option3(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue2option4}
                onChange={(e) => setInputValue2option4(e.target.value)}
              />
            </li>
          </ol>
        </div>
      </div>
      <div>
        <label>Question3</label>
        <input
          type="text"
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
        />
        <div>
          <ol>
            <li>
              <input
                type="text"
                value={inputValue3option1}
                onChange={(e) => setInputValue3option1(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue3option2}
                onChange={(e) => setInputValue3option2(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue3option3}
                onChange={(e) => setInputValue3option3(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue3option4}
                onChange={(e) => setInputValue3option4(e.target.value)}
              />
            </li>
          </ol>
        </div>
      </div>
      <div>
        <label>Question4</label>
        <input
          type="text"
          value={inputValue4}
          onChange={(e) => setInputValue4(e.target.value)}
        />
        <div>
          <ol>
            <li>
              <input
                type="text"
                value={inputValue4option1}
                onChange={(e) => setInputValue4option1(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue4option2}
                onChange={(e) => setInputValue4option2(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue4option3}
                onChange={(e) => setInputValue4option3(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue4option4}
                onChange={(e) => setInputValue4option4(e.target.value)}
              />
            </li>
          </ol>
        </div>
      </div>
      <div>
        <label>Question5</label>
        <input
          type="text"
          value={inputValue5}
          onChange={(e) => setInputValue5(e.target.value)}
        />
        <div>
          <ol>
            <li>
              <input
                type="text"
                value={inputValue5option1}
                onChange={(e) => setInputValue5option1(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue5option2}
                onChange={(e) => setInputValue5option2(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue5option3}
                onChange={(e) => setInputValue5option3(e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                value={inputValue5option4}
                onChange={(e) => setInputValue5option4(e.target.value)}
              />
            </li>
          </ol>
        </div>
      </div>

      <br />
      <button onClick={savaData}>Save</button>
    </div>
  );
}
