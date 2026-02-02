export interface Region {
  code: string;
  name: string;
  city: string;
}

export const regionCodes: Region[] = [
  // 서울특별시
  { code: "11110", name: "종로구", city: "서울특별시" },
  { code: "11140", name: "중구", city: "서울특별시" },
  { code: "11170", name: "용산구", city: "서울특별시" },
  { code: "11200", name: "성동구", city: "서울특별시" },
  { code: "11215", name: "광진구", city: "서울특별시" },
  { code: "11230", name: "동대문구", city: "서울특별시" },
  { code: "11260", name: "중랑구", city: "서울특별시" },
  { code: "11290", name: "성북구", city: "서울특별시" },
  { code: "11305", name: "강북구", city: "서울특별시" },
  { code: "11320", name: "도봉구", city: "서울특별시" },
  { code: "11350", name: "노원구", city: "서울특별시" },
  { code: "11380", name: "은평구", city: "서울특별시" },
  { code: "11410", name: "서대문구", city: "서울특별시" },
  { code: "11440", name: "마포구", city: "서울특별시" },
  { code: "11470", name: "양천구", city: "서울특별시" },
  { code: "11500", name: "강서구", city: "서울특별시" },
  { code: "11530", name: "구로구", city: "서울특별시" },
  { code: "11545", name: "금천구", city: "서울특별시" },
  { code: "11560", name: "영등포구", city: "서울특별시" },
  { code: "11590", name: "동작구", city: "서울특별시" },
  { code: "11620", name: "관악구", city: "서울특별시" },
  { code: "11650", name: "서초구", city: "서울특별시" },
  { code: "11680", name: "강남구", city: "서울특별시" },
  { code: "11710", name: "송파구", city: "서울특별시" },
  { code: "11740", name: "강동구", city: "서울특별시" },

  // 부산광역시
  { code: "26110", name: "중구", city: "부산광역시" },
  { code: "26140", name: "서구", city: "부산광역시" },
  { code: "26170", name: "동구", city: "부산광역시" },
  { code: "26200", name: "영도구", city: "부산광역시" },
  { code: "26230", name: "부산진구", city: "부산광역시" },
  { code: "26260", name: "동래구", city: "부산광역시" },
  { code: "26290", name: "남구", city: "부산광역시" },
  { code: "26320", name: "북구", city: "부산광역시" },
  { code: "26350", name: "해운대구", city: "부산광역시" },
  { code: "26380", name: "사하구", city: "부산광역시" },
  { code: "26410", name: "금정구", city: "부산광역시" },
  { code: "26440", name: "강서구", city: "부산광역시" },
  { code: "26470", name: "연제구", city: "부산광역시" },
  { code: "26500", name: "수영구", city: "부산광역시" },
  { code: "26530", name: "사상구", city: "부산광역시" },
  { code: "26710", name: "기장군", city: "부산광역시" },

  // 대구광역시
  { code: "27110", name: "중구", city: "대구광역시" },
  { code: "27140", name: "동구", city: "대구광역시" },
  { code: "27170", name: "서구", city: "대구광역시" },
  { code: "27200", name: "남구", city: "대구광역시" },
  { code: "27230", name: "북구", city: "대구광역시" },
  { code: "27260", name: "수성구", city: "대구광역시" },
  { code: "27290", name: "달서구", city: "대구광역시" },
  { code: "27710", name: "달성군", city: "대구광역시" },

  // 인천광역시
  { code: "28110", name: "중구", city: "인천광역시" },
  { code: "28140", name: "동구", city: "인천광역시" },
  { code: "28177", name: "미추홀구", city: "인천광역시" },
  { code: "28185", name: "연수구", city: "인천광역시" },
  { code: "28200", name: "남동구", city: "인천광역시" },
  { code: "28237", name: "부평구", city: "인천광역시" },
  { code: "28245", name: "계양구", city: "인천광역시" },
  { code: "28260", name: "서구", city: "인천광역시" },
  { code: "28710", name: "강화군", city: "인천광역시" },
  { code: "28720", name: "옹진군", city: "인천광역시" },

  // 광주광역시
  { code: "29110", name: "동구", city: "광주광역시" },
  { code: "29140", name: "서구", city: "광주광역시" },
  { code: "29155", name: "남구", city: "광주광역시" },
  { code: "29170", name: "북구", city: "광주광역시" },
  { code: "29200", name: "광산구", city: "광주광역시" },

  // 대전광역시
  { code: "30110", name: "동구", city: "대전광역시" },
  { code: "30140", name: "중구", city: "대전광역시" },
  { code: "30170", name: "서구", city: "대전광역시" },
  { code: "30200", name: "유성구", city: "대전광역시" },
  { code: "30230", name: "대덕구", city: "대전광역시" },

  // 울산광역시
  { code: "31110", name: "중구", city: "울산광역시" },
  { code: "31140", name: "남구", city: "울산광역시" },
  { code: "31170", name: "동구", city: "울산광역시" },
  { code: "31200", name: "북구", city: "울산광역시" },
  { code: "31710", name: "울주군", city: "울산광역시" },

  // 세종특별자치시
  { code: "36110", name: "세종시", city: "세종특별자치시" },

  // 경기도
  { code: "41111", name: "수원시 장안구", city: "경기도" },
  { code: "41113", name: "수원시 권선구", city: "경기도" },
  { code: "41115", name: "수원시 팔달구", city: "경기도" },
  { code: "41117", name: "수원시 영통구", city: "경기도" },
  { code: "41131", name: "성남시 수정구", city: "경기도" },
  { code: "41133", name: "성남시 중원구", city: "경기도" },
  { code: "41135", name: "성남시 분당구", city: "경기도" },
  { code: "41150", name: "의정부시", city: "경기도" },
  { code: "41171", name: "안양시 만안구", city: "경기도" },
  { code: "41173", name: "안양시 동안구", city: "경기도" },
  { code: "41190", name: "부천시", city: "경기도" },
  { code: "41210", name: "광명시", city: "경기도" },
  { code: "41220", name: "평택시", city: "경기도" },
  { code: "41250", name: "동두천시", city: "경기도" },
  { code: "41271", name: "안산시 상록구", city: "경기도" },
  { code: "41273", name: "안산시 단원구", city: "경기도" },
  { code: "41281", name: "고양시 덕양구", city: "경기도" },
  { code: "41285", name: "고양시 일산동구", city: "경기도" },
  { code: "41287", name: "고양시 일산서구", city: "경기도" },
  { code: "41290", name: "과천시", city: "경기도" },
  { code: "41310", name: "구리시", city: "경기도" },
  { code: "41360", name: "남양주시", city: "경기도" },
  { code: "41370", name: "오산시", city: "경기도" },
  { code: "41390", name: "시흥시", city: "경기도" },
  { code: "41410", name: "군포시", city: "경기도" },
  { code: "41430", name: "의왕시", city: "경기도" },
  { code: "41450", name: "하남시", city: "경기도" },
  { code: "41461", name: "용인시 처인구", city: "경기도" },
  { code: "41463", name: "용인시 기흥구", city: "경기도" },
  { code: "41465", name: "용인시 수지구", city: "경기도" },
  { code: "41480", name: "파주시", city: "경기도" },
  { code: "41500", name: "이천시", city: "경기도" },
  { code: "41550", name: "안성시", city: "경기도" },
  { code: "41570", name: "김포시", city: "경기도" },
  { code: "41590", name: "화성시", city: "경기도" },
  { code: "41610", name: "광주시", city: "경기도" },
  { code: "41630", name: "양주시", city: "경기도" },
  { code: "41650", name: "포천시", city: "경기도" },
  { code: "41670", name: "여주시", city: "경기도" },
];

export const groupedRegions = regionCodes.reduce(
  (acc, region) => {
    if (!acc[region.city]) {
      acc[region.city] = [];
    }
    acc[region.city].push(region);
    return acc;
  },
  {} as Record<string, Region[]>,
);
