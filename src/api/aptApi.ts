import axios from "axios";
import { AptTradeItem, AptTradeDevItem } from "../types/apt";

const API_BASE_URL = "https://apis.data.go.kr/1613000";
const SERVICE_KEY = import.meta.env.VITE_SERVICE_API_KEY;

interface ApiResponse<T> {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: T | T[];
      };
      totalCount: number;
      numOfRows?: number;
      pageNo?: number;
    };
  };
}

export async function fetchAptTradeList(
  lawdCd: string,
  dealYmd: string,
  pageNo: number = 1,
  numOfRows: number = 10,
): Promise<{ items: AptTradeItem[]; totalCount: number }> {
  const url = `${API_BASE_URL}/RTMSDataSvcAptTrade/getRTMSDataSvcAptTrade`;

  const response = await axios.get<ApiResponse<AptTradeItem>>(url, {
    params: {
      LAWD_CD: lawdCd,
      DEAL_YMD: dealYmd,
      serviceKey: SERVICE_KEY,
      pageNo,
      numOfRows,
    },
  });

  const body = response.data.response.body;
  const items = body.items?.item;
  const itemsArray = items ? (Array.isArray(items) ? items : [items]) : [];

  return {
    items: itemsArray,
    totalCount: body.totalCount || 0,
  };
}

export async function fetchAptTradeDetail(
  lawdCd: string,
  dealYmd: string,
  pageNo: number = 1,
  numOfRows: number = 100,
): Promise<AptTradeDevItem[]> {
  const url = `${API_BASE_URL}/RTMSDataSvcAptTradeDev/getRTMSDataSvcAptTradeDev`;

  const response = await axios.get<ApiResponse<AptTradeDevItem>>(url, {
    params: {
      LAWD_CD: lawdCd,
      DEAL_YMD: dealYmd,
      serviceKey: SERVICE_KEY,
      pageNo,
      numOfRows,
    },
  });

  const items = response.data.response.body.items.item;
  return Array.isArray(items) ? items : [items];
}
