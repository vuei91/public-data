import React from "react";
import { AptTradeItem } from "../types/apt";
import "./AptList.css";

interface AptListProps {
  items: AptTradeItem[];
  onItemClick: (item: AptTradeItem) => void;
}

export const AptList: React.FC<AptListProps> = ({ items, onItemClick }) => {
  const formatPrice = (price: string) => {
    const numPrice = parseInt(price.replace(/,/g, ""));
    if (numPrice >= 10000) {
      const eok = Math.floor(numPrice / 10000);
      const man = numPrice % 10000;
      return man > 0 ? `${eok}억 ${man}만원` : `${eok}억원`;
    }
    return `${numPrice.toLocaleString()}만원`;
  };

  return (
    <div className="apt-list">
      {items.map((item, index) => (
        <div key={index} className="apt-item" onClick={() => onItemClick(item)}>
          <div className="apt-item-header">
            <h3>{item.aptNm}</h3>
            <span className="price">{formatPrice(item.dealAmount)}</span>
          </div>
          <div className="apt-item-info">
            <span>
              {item.umdNm} {item.jibun}
            </span>
            <span>{item.excluUseAr}㎡</span>
            <span>{item.floor}층</span>
          </div>
          <div className="apt-item-date">
            거래일: {item.dealYear}.{item.dealMonth}.{item.dealDay}
          </div>
        </div>
      ))}
    </div>
  );
};
