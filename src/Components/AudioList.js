import { useEffect, useState } from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import MusicPlayer from './MusicPlayer';
import Songs from './Songs'

const AudioList = () => {

  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);


  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    console.log(allSongs)
    function changeActive() {
      allSongs.forEach((song) => song.classList.remove("active"));
      this.classList.add("active");
    }
    allSongs.forEach((song) => song.addEventListener("click", changeActive))
  }, [])

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite
      }
    })
    setSongs([...songs])
  }

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{Songs.length} songs</span>
      </h2>
      <div className="songsContainer">
        {
          Songs?.map((song, index) => (
            <div className="songs" key={song.id} onClick={() => setMainSong(song?.song, song?.imgSrc)}>
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song.songName}
                    <span className="spanArtist">
                      {song.artist}
                    </span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i> <FaHeadphones /></i>
                      95,390,112
                    </p>
                    <p className="duration">
                      <i><FaRegClock /> </i>
                      04.04
                    </p>
                    <div className="favourite" onClick={() => changeFavourite(song?.id)}>
                      {
                        song?.favourite ?
                          <i><FaHeart /></i>
                          :
                          <i><FaRegHeart /></i>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

        <MusicPlayer song={song} imgSrc={img}  autoplay={auto}/>

      </div>
    </div>
  )
}

export default AudioList