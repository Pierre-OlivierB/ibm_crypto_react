import React, { useEffect, useState } from "react";

function StarIcon({ coinId }) {
  const [like, setLike] = useState(false);

  const idChacker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");

      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  });

  return (
    <img
      onClick={() => idChacker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon fav"
    />
  );
}

export default StarIcon;
