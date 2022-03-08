import styled from "styled-components";
import Carousel from "./carousel";

const Container = styled.div`
  width: 63rem;
  height: 46rem;
  @media screen and  (max-width:1500px) {
      width: 50rem;
  }
  @media screen and  (max-width:1300px) {
      width: 40rem;
  }
  @media screen and  (max-width:1000px) {
      width: 27rem;
  }
  @media screen and  (max-width:600px) {
      width: 15rem;
  }
  @media screen and  (max-width:400px) {
      width: 12rem;
      height: 33rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
    @media screen and  (max-width:400px) {
      font-weight: 600;
      font-size: 1.2rem;
  }
`

const Tag = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.3rem;
  background-color: #6DECB9;
  padding: 0.3rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: #fff;
    @media screen and  (max-width:400px) {
      padding: 0.2rem;
      font-size: 0.5rem;
  }
`

const NewPosts = ({ }) => {
  const posts = [
    { id: 1, title: '블록체인 NOW', url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" },
    { id: 2, title: '블록체인 NOW', url: "https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80" },
    { id: 3, title: '블록체인 NOW', url: "https://images.unsplash.com/photo-1455906876003-298dd8c44ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1676&q=80" }
  ];

  return (
    <Container>
      <Header>
        <HeaderText>새로 올라왔어요</HeaderText>
        <Tag>NEW</Tag>
      </Header>
      <Carousel posts={posts} />
    </Container>
  );
}

export default NewPosts;