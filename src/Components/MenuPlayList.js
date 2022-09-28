import React from 'react'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

const MenuPlayList = ({ title, playListObject }) => {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>{title}</p>
        <i><FaPlus /></i>
      </div>
      <div className="playListScroll">
        {
          playListObject?.map((playList) => (
            <div key={playList.id} className="playList">
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{playList.name}</p>
              <i className="trash"><BsTrash /></i>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MenuPlayList