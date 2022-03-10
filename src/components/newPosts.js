import styled from "styled-components";
import Carousel from "./carousel";

const Container = styled.div`
  padding-top: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 4rem;
  width: 100%;
  height: 46rem;
  background: rgba(184, 223, 248, 0.2);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 400px) {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const Tag = styled.div`
  margin-left: 0.5rem;
  border-radius: 0.3rem;
  background-color: #6decb9;
  padding: 0.3rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: #fff;
  @media screen and (max-width: 400px) {
    padding: 0.2rem;
    font-size: 0.5rem;
  }
`;

const NewPosts = ({ posts }) => {
  console.log(posts);
  return (
    <Container>
      <Header>
        <HeaderText>새로 올라왔어요</HeaderText>
        <Tag>NEW</Tag>
      </Header>
      {posts && <Carousel posts={posts} />}
    </Container>
  );
};

export default NewPosts;
