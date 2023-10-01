import {useState} from 'react'
export const TextUtils=()=>{
    
    const handleChange=(event)=>{
        setUtilText(event.target.value);
        console.log(event.target.value);
    }
    const convertToUpper=()=>{
        let upText=util_text.toUpperCase();
        console.log(upText);
        setUtilText(upText);
    }
    const convertToLower=()=>{
        let lvText=util_text.toLowerCase();
        setUtilText(lvText);
    }
    // const speak = () => {
    //     console.log(util_text);
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = util_text;
    //     window.speechSynthesis.speak(msg);
    // }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(util_text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const reverse=() =>{
        const str = util_text;
        const reverseToogle = document.getElementById('reverseToogle')
        if (reverseToogle.textContent == "Reverse Text") {
            reverseToogle.innerHTML = "Revert Original"  
        }
        else{
            reverseToogle.innerHTML = "Reverse Text"  
        }
        const reversedStr = str.split("").reverse().join("");
        setUtilText(reversedStr);
    }
    const handleCapitalize = () => {
        let newText = util_text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setUtilText(newText);
    }
    const copyText = () => {
        navigator.clipboard.writeText(util_text);
    }
    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setUtilText(event.target.result);
        };
        reader.readAsText(file);
    }
    const [util_text,setUtilText]=useState('Please enter text here');
    return <>
    <div className="container">
        <div className="mb-3 text-left">
            <label htmlFor="util_text" className="form-label text-left">Example textarea</label>
            <textarea value={util_text} onChange={handleChange}className="form-control" id="util_text" rows="3"/>
            <div className='btn-container mt-2'>
            <button className="btn btn-primary " onClick={convertToUpper}> Convert It Uppercase</button>
            <button className="btn btn-primary ms-2" onClick={convertToLower}> Convert It Lowercase</button>
            {/* <button class="btn btn-primary ms-2" onClick={speak}> Speak</button> */}
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
            <button type="submit" onClick={reverse} className="btn btn-warning mx-2 my-2" id="reverseToogle" >Reverse Text</button>
            <button type="submit" onClick={handleCapitalize} className="btn btn-warning mx-2 my-2"  >Capitalize</button>
            <button type="submit" onClick={copyText} className="btn btn-warning mx-2 my-2"  >Copy Text</button>
            <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}/>



            </div>
            
        </div>
    </div>
        
    </>
}