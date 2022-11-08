import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick=()=>{
        setText(text.toUpperCase())
        if(text!==""){
        props.showAlert('Your text has been uppercased','success')
        }
        else{
            props.showAlert('Enter some text','warning')
        }
    }
    const handleLoClick=()=>{  
        if(text!==""){
        setText(text.toLowerCase())
        props.showAlert('Your text has been lowercased','success')
        }
        else{
            props.showAlert('Enter some text','warning')
        }

    }
    const handleClrClick=()=>{
        setText('')
        if(text!==""){
        props.showAlert('Text Cleared','success')
        }

    }
    const handleCapClick=()=>{
        
        if(text!==""){
            setText(text.charAt(0).toUpperCase() + text.slice(1))
        props.showAlert('Your text has been Capitalized','success')
        }
        else{
            props.showAlert('Enter some text','warning')
        }
 
    }
    const handleDoubleWSClick=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(' '))
        if(text!==""){
        props.showAlert('Double spaces have been removed.','success')
        }
        else{
            props.showAlert('Enter some text','warning')
        }
    
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    } 


  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':props.mode==='primary'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3" >   
            <textarea className="form-control" placeholder='Enter your text...' onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'rgb(33,37,41,0.85)':props.mode==='primary'?'rgb(13,110,253,0.5)':props.mode==='success'?'rgb(179, 255, 174,0.5)':props.mode==='warning'?'#F6F6C9':'white',color: props.mode==='dark'||props.mode==='primary'?'white':'black'}}></textarea>       
        </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalize</button>
    <button className="btn btn-primary mx-1" onClick={handleDoubleWSClick}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'||props.mode==='primary'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim().length===0?0:text.trim().split(' ').length} words and {text.trim().length} characters</p>
        <p>{0.008*text.trim().split(' ').length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
