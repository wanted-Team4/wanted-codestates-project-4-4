import React from "react";
import NewPosts from "../components/newPosts";
import { useRecoilValue } from 'recoil';
import { Data } from '../atom';

const Column = () => {
  const data = useRecoilValue(Data);
  const MainPosts = data.content?.filter((el) => el.sector_id === 1 && el.like_top === 1);

  return (
    <>
      <NewPosts posts={MainPosts} />
    </>
  )
};

export default Column;
