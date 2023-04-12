import React from 'react';
import { useRef, useEffect , useState} from 'react';
import './emotion.css';
import Navbar from '../Intro_page/Navbar';

function Emotion(e){
    // e.preventDefault();
    const videoRef = useRef(null);
    const [click, setClick] = useState(0)

    useEffect(() => {
    const constraints = { video: true, audio: true };
    const videoElement = document.getElementById("video");
    const mediaRecorderChunks = [];
    
    function startVideo() {
        navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            videoElement.srcObject = stream;

            const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp9" });
            mediaRecorder.start();

            mediaRecorder.addEventListener("dataavailable", (event) => {
              mediaRecorderChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
              const blob = new Blob(mediaRecorderChunks, { type: "video/webm" });
              const url = URL.createObjectURL(blob);
              const videoDownloadLink = document.createElement("a");
              videoDownloadLink.href = url;
              videoDownloadLink.download = "recorded-video.webm";
              videoDownloadLink.click();
              videoDownloadLink.innerHTML = "Download Recorded Video";
            });

            setTimeout(() => {
              mediaRecorder.stop();
              // videoElement.srcObject = null;
            }, 10000);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    if (click === 1)
      startVideo();
  }, [click])

    return(
      <>
      <Navbar />
    <div className='emo'>
        <div className='vid-container hide'>
            <video id="video" width="400" height="300" autoPlay ref={videoRef} muted className='vid'></video>
            <br />
            HOLD IT IN!
        </div>

        <div className='instructions'>
          Say Cheese and Hold it!<br />
          Smile your brightest smile and hold it for 5 seconds to increase your smile streak counter<br />
        </div>

        <button id="record-button" className="but" onClick={()=> {
          if (click === 0)
            setClick(1);
          else
            setClick(0);
          for (var i = 0; i < document.getElementsByClassName('vid-container').length; i++)
            document.getElementsByClassName('vid-container')[i].classList.toggle('hide');
          for (i = 0; i < document.getElementsByClassName('but').length; i++)
            document.getElementsByClassName('but')[i].classList.toggle('hide');
          for (i = 0; i < document.getElementsByClassName('instructions').length; i++)
            document.getElementsByClassName('instructions')[i].classList.toggle('hide');
        }}>Record (5 seconds)</button>
    </div></>
    )
}

export default Emotion;
