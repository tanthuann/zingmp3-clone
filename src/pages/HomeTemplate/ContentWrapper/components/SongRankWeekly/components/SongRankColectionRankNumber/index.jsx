// libs import
import React from "react";

// style
import "./style.scss";

/**
 * SongRankColectionItemRankNumber - description rank number of song
 * @param { number } rankNumber // rankNumber of song
 */

const SongRankColectionItemRankNumber = ({ rankNumber }) => {
  return (
    <div className="song-rank-colection-item-rank-number">{rankNumber}</div>
  );
};

export default SongRankColectionItemRankNumber;
