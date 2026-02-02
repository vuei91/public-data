import React, { useState, useEffect } from "react";
import { AptList } from "./components/AptList";
import { AptDetail } from "./components/AptDetail";
import { Pagination } from "./components/Pagination";
import { fetchAptTradeList, fetchAptTradeDetail } from "./api/aptApi";
import { AptTradeItem, AptTradeDevItem } from "./types/apt";
import { groupedRegions } from "./data/regionCodes";
import "./App.css";

function App() {
  const [items, setItems] = useState<AptTradeItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<AptTradeDevItem | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 검색 조건
  const [lawdCd, setLawdCd] = useState("11110"); // 서울 종로구
  const [dealYear, setDealYear] = useState("2024");
  const [dealMonth, setDealMonth] = useState("01");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 10;

  const dealYmd = dealYear + dealMonth;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  useEffect(() => {
    loadAptList();
  }, []);

  const loadAptList = async (page: number = 1) => {
    setLoading(true);
    setError(null);
    try {
      const { items: data, totalCount: total } = await fetchAptTradeList(
        lawdCd,
        dealYmd,
        page,
        itemsPerPage,
      );
      setItems(data);
      setTotalCount(total);
      setCurrentPage(page);
    } catch (err) {
      setError("데이터를 불러오는데 실패했습니다.");
      console.error(err);
      setItems([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    loadAptList(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemClick = async (item: AptTradeItem) => {
    try {
      // 상세 API는 페이지네이션으로 많은 데이터를 가져와서 매칭
      const detailList = await fetchAptTradeDetail(lawdCd, dealYmd, 1, 1000);

      // 클릭한 아이템과 매칭되는 상세 정보 찾기
      const matchedDetail = detailList.find(
        (detail) =>
          detail.aptNm === item.aptNm &&
          detail.jibun === item.jibun &&
          detail.dealYear === item.dealYear &&
          detail.dealMonth === item.dealMonth &&
          detail.dealDay === item.dealDay &&
          detail.dealAmount === item.dealAmount,
      );

      if (matchedDetail) {
        setSelectedItem(matchedDetail);
      } else {
        setError("상세 정보를 찾을 수 없습니다.");
      }
    } catch (err) {
      setError("상세 정보를 불러오는데 실패했습니다.");
      console.error(err);
    }
  };

  const handleSearch = () => {
    loadAptList(1); // 검색 시 첫 페이지부터
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>아파트 실거래가 조회</h1>
      </header>

      <div className="search-section">
        <div className="search-row">
          <div className="input-group">
            <label>지역 선택</label>
            <select value={lawdCd} onChange={(e) => setLawdCd(e.target.value)}>
              {Object.entries(groupedRegions).map(([city, regions]) => (
                <optgroup key={city} label={city}>
                  {regions.map((region) => (
                    <option key={region.code} value={region.code}>
                      {region.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>거래년도</label>
            <select
              value={dealYear}
              onChange={(e) => setDealYear(e.target.value)}
            >
              {Array.from({ length: 10 }, (_, i) => 2026 - i).map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>거래월</label>
            <select
              value={dealMonth}
              onChange={(e) => setDealMonth(e.target.value)}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month.toString().padStart(2, "0")}>
                  {month}월
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "조회중..." : "조회"}
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading && <div className="loading">데이터를 불러오는 중...</div>}

      {!loading && items.length > 0 && (
        <>
          <div className="result-info">
            총 {totalCount}건 (페이지 {currentPage}/{totalPages})
          </div>
          <AptList items={items} onItemClick={handleItemClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {!loading && items.length === 0 && !error && (
        <div className="empty-message">조회된 데이터가 없습니다.</div>
      )}

      <AptDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default App;
