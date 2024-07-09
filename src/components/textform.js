import React, { useState } from "react";

export default function Textform(props) {
  const handleUPclick = () => {
    // console.log("handleUPclick is clicked");
    let UPtext = Text.toUpperCase();
    setText(UPtext);
    props.showalert("converted to uppercase","success");

  };
  const handleLoclick = () => {
    console.log("handleUPclick is clicked");
    let UPtext = Text.toLowerCase();
    setText(UPtext);
    props.showalert("converted to lowercase","success");
  };
  async function handleclipboard() {
    navigator.clipboard.writeText(Text);
    const text = await navigator.clipboard.readText(Text);
    props.showalert("copied to clipboard","success");
  }

  const speak = (event) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
  };

  const handleonchange = (event) => {
    console.log("handleonchange is clicked");
    // console.log(setText)
    setText(event.target.value);
    // console.log(Text)
  };
  const [Text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='#322f45'?'white':'black'}}>
        <form>
          <h1>{props.heading}</h1>
          <div className="form-group">
            <textarea
              className="form-control"
              style={{backgroundColor:props.mode==='#322f45'?'#322f45':'white',
                color:props.mode==='#322f45'?'white':'black'
              }}
              value={Text}
              onChange={handleonchange}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
            <button
              type="button"
              className="btn btn-primary my-3 ml-5"
              onClick={handleUPclick}
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              className="btn btn-primary my-3 ml-5"
              onClick={handleLoclick}
            >
              Convert to Lowercase
            </button>
            <button
              type="button"
              className="btn btn-primary my-3 ml-5"
              onClick={handleclipboard}
            >
              Copy to clipboard
            </button>
            <button
              type="submit"
              onClick={speak}
              className="btn btn-warning  my-3 ml-5 "
            >
              Speak
            </button>
          </div>
        </form>
      </div>
      <div className="container"
       style={{color: props.mode==='#322f45'?'white':'black'}}>
        <h2>This is your text summary</h2>
        <p>
          {Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters
        </p>
        <p>
          The above text can be read in {0.008 * Text.split(" ").length} Minutes
        </p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something to preview it here."}</p>
      </div>
    </>
  );
}

