import dotenv from "dotenv";
import axios, { AxiosError } from "axios";

dotenv.config();

// 상세 자료 응답 타입
interface AptTradeDevItem {
  sggCd: string;
  umdCd: string;
  landCd: string;
  bonbun: string;
  bubun: string;
  roadNm: string;
  roadNmSggCd: string;
  roadNmCd: string;
  roadNmSeq: string;
  roadNmbCd: string;
  roadNmBonbun: string;
  roadNmBubun: string;
  umdNm: string;
  aptNm: string;
  jibun: string;
  excluUseAr: string;
  dealYear: string;
  dealMonth: string;
  dealDay: string;
  dealAmount: string;
  floor: string;
  buildYear: string;
  aptSeq: string;
  cdealType: string;
  cdealDay: string;
  dealingGbn: string;
  estateAgentSggNm: string;
  rgstDate: string;
  aptDong: string;
  slerGbn: string;
  buyerGbn: string;
  landLeaseholdGbn: string;
}

interface AptTradeDevResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: {
      item: AptTradeDevItem | AptTradeDevItem[];
    };
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

// 기본 자료 응답 타입
interface AptTradeItem {
  sggCd: string;
  umdNm: string;
  aptNm: string;
  jibun: string;
  excluUseAr: string;
  dealYear: string;
  dealMonth: string;
  dealDay: string;
  dealAmount: string;
  floor: string;
  buildYear: string;
  cdealType: string;
  cdealDay: string;
  dealingGbn: string;
  estateAgentSggNm: string;
  rgstDate: string;
  aptDong: string;
  slerGbn: string;
  buyerGbn: string;
  landLeaseholdGbn: string;
}

interface AptTradeResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: {
      item: AptTradeItem | AptTradeItem[];
    };
    totalCount: number;
    numOfRows: number;
    pageNo: number;
  };
}

/**
 * 국토교통부 아파트 매매 실거래가 상세 자료 조회
 * @param LAWD_CD - 지역코드 (예: 11110)
 * @param DEAL_YMD - 거래년월 (예: 202401)
 * @param pageNo - 페이지 번호 (기본값: 1)
 * @param numOfRows - 한 페이지 결과 수 (기본값: 10)
 * @returns API 응답 데이터
 */
export async function getAptTradeDev(
  LAWD_CD: string,
  DEAL_YMD: string,
  pageNo: number = 1,
  numOfRows: number = 10,
): Promise<AptTradeDevResponse> {
  const url =
    "https://apis.data.go.kr/1613000/RTMSDataSvcAptTradeDev/getRTMSDataSvcAptTradeDev";

  try {
    const response = await axios.get<AptTradeDevResponse>(url, {
      params: {
        LAWD_CD,
        DEAL_YMD,
        serviceKey: process.env.SERVICE_API_KEY,
        pageNo,
        numOfRows,
      },
    });

    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
    throw error;
  }
}

/**
 * 국토교통부 아파트 매매 실거래가 자료 조회
 * @param LAWD_CD - 지역코드 (예: 11110)
 * @param DEAL_YMD - 거래년월 (예: 202401)
 * @returns API 응답 데이터
 */
export async function getAptTrade(
  LAWD_CD: string,
  DEAL_YMD: string,
): Promise<AptTradeResponse> {
  const url =
    "https://apis.data.go.kr/1613000/RTMSDataSvcAptTrade/getRTMSDataSvcAptTrade";

  try {
    const response = await axios.get<AptTradeResponse>(url, {
      params: {
        LAWD_CD,
        DEAL_YMD,
        serviceKey: process.env.SERVICE_API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    handleApiError(error as AxiosError);
    throw error;
  }
}

/**
 * API 에러 처리
 */
function handleApiError(error: AxiosError): void {
  if (error.response) {
    const status = error.response.status;
    const message = error.response.data;

    switch (status) {
      case 401:
        console.error(
          "Unauthorized: API 인증키가 존재하지 않거나 유효하지 않습니다.",
        );
        break;
      case 403:
        console.error(
          "Forbidden: API 서비스에 대한 신청내역이 확인되지 않습니다.",
        );
        break;
      case 404:
        console.error("API not found: API 서비스가 존재하지 않습니다.");
        break;
      case 429:
        console.error(
          "API rate limit exceeded: 서버의 최대 동시 요청 수를 초과하였습니다.",
        );
        break;
      default:
        console.error(`API Error (${status}):`, message);
    }
  } else if (error.request) {
    console.error(
      "Error forwarding request to backend server: 기관 API 서버와의 연결에 실패했습니다.",
    );
  } else {
    console.error("Unexpected error:", error.message);
  }
}
