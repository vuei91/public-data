import React from "react";
import { AptTradeDevItem } from "../types/apt";
import "./AptDetail.css";

interface AptDetailProps {
  item: AptTradeDevItem | null;
  onClose: () => void;
}

export const AptDetail: React.FC<AptDetailProps> = ({ item, onClose }) => {
  if (!item) return null;

  const formatPrice = (price: string) => {
    const numPrice = parseInt(price.replace(/,/g, ""));
    if (numPrice >= 10000) {
      const eok = Math.floor(numPrice / 10000);
      const man = numPrice % 10000;
      return man > 0 ? `${eok}억 ${man}만원` : `${eok}억원`;
    }
    return `${numPrice.toLocaleString()}만원`;
  };

  const getDealType = (type: string) => {
    return type === "직거래" ? "직거래" : "중개거래";
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{item.aptNm}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="detail-section">
            <h3>거래 정보</h3>
            <div className="detail-row">
              <span className="label">거래금액</span>
              <span className="value price">
                {formatPrice(item.dealAmount)}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">거래일</span>
              <span className="value">
                {item.dealYear}년 {item.dealMonth}월 {item.dealDay}일
              </span>
            </div>
            <div className="detail-row">
              <span className="label">거래유형</span>
              <span className="value">{getDealType(item.dealingGbn)}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>물건 정보</h3>
            <div className="detail-row">
              <span className="label">위치</span>
              <span className="value">
                {item.umdNm} {item.jibun}
              </span>
            </div>
            {item.roadNm && (
              <div className="detail-row">
                <span className="label">도로명</span>
                <span className="value">{item.roadNm}</span>
              </div>
            )}
            <div className="detail-row">
              <span className="label">동</span>
              <span className="value">{item.aptDong}동</span>
            </div>
            <div className="detail-row">
              <span className="label">층</span>
              <span className="value">{item.floor}층</span>
            </div>
            <div className="detail-row">
              <span className="label">전용면적</span>
              <span className="value">
                {item.excluUseAr}㎡ (
                {(parseFloat(item.excluUseAr) * 0.3025).toFixed(2)}평)
              </span>
            </div>
            <div className="detail-row">
              <span className="label">건축년도</span>
              <span className="value">{item.buildYear}년</span>
            </div>
          </div>

          {item.estateAgentSggNm && (
            <div className="detail-section">
              <h3>중개사 정보</h3>
              <div className="detail-row">
                <span className="label">중개사 위치</span>
                <span className="value">{item.estateAgentSggNm}</span>
              </div>
            </div>
          )}

          <div className="detail-section">
            <h3>기타 정보</h3>
            <div className="detail-row">
              <span className="label">등기일</span>
              <span className="value">{item.rgstDate}</span>
            </div>
            {item.cdealType && (
              <div className="detail-row">
                <span className="label">해제여부</span>
                <span className="value">{item.cdealType}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
