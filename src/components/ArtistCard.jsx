import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import PlayPause from "./PlayPause";
// import { playPause, setActiveSong } from "../redux/features/playerSlice";

const ArtistCard = ({ track , isPlaying, activeSong, data, i}) => {
  const navigate = useNavigate();

  // const dispatch = useDispatch(); //added
  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // }
  // const handlePlayClick = () => {
  //   dispatch(setActiveSong({song,data,i}));
  //   dispatch(playPause(true));
  // }

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;