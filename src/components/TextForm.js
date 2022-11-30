import React ,{useState}from 'react'

export default function TextForm(props) {
    const [text, setText] = useState ('');

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleloClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success")

  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
}
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

    const handleCopy = ()=>{
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'} }></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert into LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length}words {text.length}charaters</p>
    </div>
    </>
  )
}
