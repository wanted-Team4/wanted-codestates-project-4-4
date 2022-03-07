import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import Card from "./Card";

const CardsContainer = styled.div`
  display: grid;
  grid: auto-flow/1fr 1fr 1fr;
  img {
    width: 100%;
    height: 50%;
  }
  h1 {
    font-size: 1rem;
  }
`;

const InsightCardList = () => {
  const content = [
    {
      id: 59,
      sector_id: 1,
      title: "왜 주식과 비트코인은 함께 떨어질까",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png",
      link: "https://medium.com/sandbank-kr/c7b31c05301b",
      upload_date: "2022-01-29",
      like_cnt: 0,
      like_top: 1,
    },

    {
      id: 39,
      sector_id: 1,
      title: "[오피니언] 비트코인은 세상을 고친다",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_013.png",
      link: "https://medium.com/sandbank-kr/f3f50e02463f",
      upload_date: "2021-11-17",
      like_cnt: 0,
      like_top: 0,
    },

    {
      id: 62,
      sector_id: 2,
      title:
        "부동산 시장에도 번진 크립토 금융! 이제 비트코인으로 모기지론 받는다?",
      body: "최근 암호화폐 가격이 전반적으로 모두 하락하자 비트코인, 이더리움 등 메이저 코인을 장기로 보유하려는 사람들은 오히려 더욱 늘고있습니다. \n\n캐나다 스타트업인 Ledn(레든)은 이런 투자자들을 위해 '비트코인 담보 모기지론' 상품을 내놓는다고 하는데요. 과연 크립토를 부동산 대출에 어떻게 이용하는 것일까요? 함께 알아봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_033.png",
      link: "FyUSkHccOq4",
      upload_date: "2022-01-29",
      like_cnt: 0,
      like_top: 1,
    },

    {
      id: 30,
      sector_id: 3,
      title:
        "[Research Report] #2 포트폴리오에 비트코인을 추가하면 오히려 손해보는 날이 적어진다?",
      body: "비트코인은 다른 자산들과 낮은 상관관계를 가지며, 이는 주식, 채권, 금 등 기존 금융 자산에서 발견할 수 없는 독특한 특성입니다.\n\n낮은 상관관계의 이유 세 가지는 다음과 같습니다: \n1) 기존 금융자산과 다른 리스크 팩터 \n2) 비트코인 역할에 대한 다양한 기대감 3) 비트코인 투자자층과 기존 금융 자산 투자자층의 괴리\n\n비트코인의 낮은 상관관계로 포트폴리오의 안정성 향상에 기여할 수 있습니다. → 미국, 한국 60/40 포트폴리오의 손해를 보는 날이 줄어드는 효과 확인할 수 있습니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-105.png",
      link: "https://www.notion.so/Research-Report-2-4d47efc744fa463696b0dc5e8bc8fa4f",
      upload_date: "2021-10-19",
      like_cnt: 1,
      like_top: 1,
    },
  ];

  const sector = [
    {
      id: 1,
      sector_kr: "알쓸B잡",
      sector_en: "Opinion",
      type: "News",
      title: "알쓸B잡",
      url: "https://medium.com/sandbank-kr",
      script_kr: "더 많은 글은 샌드뱅크 미디엄에서 만나보세요.",
      script_en: "You can read more articles on Sandbank Medium.",
      sort: 2,
    },
    {
      id: 2,
      sector_kr: "유튜브",
      sector_en: "Youtube",
      type: "Youtube",
      title: "블록체인 NOW",
      url: "https://www.youtube.com/channel/UC2tM460k4I6vSxktyDDkSsA",
      script_kr: "더 많은 영상은 샌드뱅크 채널에서 만나보세요.",
      script_en: "You can read more articles on Sandbank Medium.",
      sort: 1,
    },
    {
      id: 3,
      sector_kr: "인사이트",
      sector_en: "Insight",
      type: "Report",
      title: "어떻게 투자할까",
      url: "https://medium.com/sandbank-kr",
      script_kr: "더 많은 글은 샌드뱅크 미디엄에서 만나보세요.",
      script_en: "You can read more articles on Sandbank Medium.",
      sort: 3,
    },
  ];

  return (
    <CardsContainer>
      {content.map((card, i) => (
        <Card key={i}>
          <img src={content[i].image} alt="content 이미지" />
          <h1>{content[i].title}</h1>
          <span>{content[i].upload_date}</span>
          <div>{/* 좋아요 */}</div>
          <div>{/* 공유하기 */}</div>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default InsightCardList;
