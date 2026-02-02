export interface AptTradeItem {
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

export interface AptTradeDevItem extends AptTradeItem {
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
  aptSeq: string;
}
