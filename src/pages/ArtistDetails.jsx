import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';


const ArtistDetails = () => {

  // const dispatch = useDispatch();

  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
  
  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };

  // const handlePlayClick = (song, i) => {
  //   dispatch(setActiveSong({ song, data, i }));
  //   dispatch(playPause(true));
  // };

  console.log(Object.values(artistData?.songs));

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
      
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        // handlePauseClick={handlePauseClick}
        // handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;