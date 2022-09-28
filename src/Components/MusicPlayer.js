import React, { useEffect, useRef, useState } from 'react'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs'
import '../Styles/MusicPlayer.css'

const MusicPlayer = ({ song, imgSrc, auto }) => {

  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlaying] = useState(false)

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation


  useEffect(() => {
    const seconds = Math.floor(audioPlayer?.current?.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);


  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };


  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };


  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>

      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">

          <div className="left">
            <div className="loved">
              {isLove ? (
                <i> <FaRegHeart /> </i>
              ) :
                <i> <FaHeart /> </i>
              }
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i> <FaStepBackward /> </i>
              <i> <FaBackward /> </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {
                isPlaying ? (
                  <i> <FaPause /> </i>
                ) : (
                  <i> <FaPlay /> </i>
                )
              }
            </div>
            <div className="forward">
              <i> <FaStepForward /> </i>
              <i> <FaForward /> </i>
            </div>
          </div>

          <div className="right">
            <i><FaShareAlt /> </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input type="range" className="progressBar" defaultValue="0" autoPlay={auto} ref={progressBar} onChange={changeProgress} />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>


      </div>
    </div>
  )
}

export default MusicPlayer