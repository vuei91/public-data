import { getAptTradeDev, getAptTrade } from "./api";

// 사용 예시
async function main() {
  try {
    // 예시 1: 상세 자료 조회 (서울 종로구, 2024년 1월)
    console.log("=== 아파트 매매 실거래가 상세 자료 조회 ===");
    const detailData = await getAptTradeDev("11110", "202401", 1, 10);
    console.log(JSON.stringify(detailData, null, 2));

    console.log("\n");

    // 예시 2: 기본 자료 조회 (서울 종로구, 2024년 1월)
    console.log("=== 아파트 매매 실거래가 자료 조회 ===");
    const basicData = await getAptTrade("11110", "202401");
    console.log(JSON.stringify(basicData, null, 2));
  } catch (error) {
    console.error("API 호출 중 오류 발생:", (error as Error).message);
  }
}

main();
