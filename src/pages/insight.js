import React from "react";
import NewPosts from "../components/newPosts";
import { useRecoilValue } from 'recoil';
import { Data } from '../atom';

const Insight = () => {
  const data = useRecoilValue(Data);
  const MainPosts = data.content?.filter((el) => el.sector_id === 3 && el.like_top === 1);

  return (
    <>
      <NewPosts posts={MainPosts} />
    </>
  )
};

export default Insight;
