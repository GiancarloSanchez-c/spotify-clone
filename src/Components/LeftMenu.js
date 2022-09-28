import React from 'react'
import '../Styles/LeftMenu.css'
import { FaSpotify, FaEllipsisH } from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import MenuList from './MenuList';
import PlayList from './PlayList';
import Menu from './Menu';
import MenuPlayList from './MenuPlayList';
import TrackList from './TrackList';

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i><FaSpotify /></i>
        <h2>Spotify</h2>
        <i> <FaEllipsisH /> </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={'Menu'} menuObject={MenuList} />
      <MenuPlayList title={'PlayList'} playListObject={PlayList} />
      <TrackList />
    </div>
  )
}

export default LeftMenu