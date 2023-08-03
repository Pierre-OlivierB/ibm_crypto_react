import React from "react";

function TableLine({ coin, index }) {
  const priceFormater = (num) => {
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num;
    }
  };
  const mktcapFormater = (num) => {
    let newNum = String(num).split("").slice(0, -6).join("");
    return Number(newNum);
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20" alt="logo coin" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.name
                .toLowerCase()
                .replace(" ", "-")
                .replace(" ", "-")
                .replace(" ", "-")
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/info-icon.svg" alt="info icon redirect" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {mktcapFormater(coin.market_cap).toLocaleString()} M$
      </p>
      <p className="volume">{coin.total_volume.toLocaleString()} $</p>
    </div>
  );
}

export default TableLine;
