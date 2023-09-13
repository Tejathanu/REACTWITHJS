import React,{useState} from 'react'


export default function Mycomponent(props) {
    const handleupclick=()=>{
        setText("you have clicked on handleonclick"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleloclick=()=>{
        setText("you have clicked on handleonclick"+text);
           let newText=text.toLowerCase();
        setText(newText)
  }
     const handlecleclick=()=>{
        setText("you have clicked on handleonclick"+text);
           let newText='';
        setText(newText)
  }
    const handleOnchange=(event)=>{
          setText(event.target.value)
    }


    const handleCopy = () => {
      let text = document.getElementById("myid");
        // navigator.clipboard.writeText(text.value);
          text.select();
        // text.setSelectionRange(0,99999)
        navigator.clipboard.writeText(text.value);
    }


    const RemoveExtraSpace =()=> {
     // let newText=text.split(/[ ]+/);
     let newText=text.trim();
      setText(newText.join(" "));
    }

    const [text, setText] = useState("");

  return (
    <>
    <div>
     <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myid" rows="6" value={text} onChange={handleOnchange}></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleupclick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-2"  onClick={handleloclick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2"  onClick={handlecleclick}>Clear text</button>
        <button className="btn btn-primary mx-2" onclick={handleCopy}>copy</button>
        <button className="btn btn-primary mx-2" onclick={RemoveExtraSpace}>Remove Extra Space</button>
    </div> 
   <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h1>Preview</h1>
    <p>{text}</p>
   </div>
   </> 
  )
}
