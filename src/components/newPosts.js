import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid blue;
  margin: 0rem 3rem;
  width: 70rem;
  height: 48rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6rem;
`

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
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
`

const StyledSlider = styled(Slider)`
    .slick-slide div{
      /* outline: none; */
    }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 57rem;
  height: 40rem;
`;

const Image = styled.img`
  width:100%;
  height:30rem;
`;

const ContentBox = styled.div`
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Like = styled.div`
  width:3rem;
`
const Share = styled.p`
  width: 5rem;
`

const NewPosts = () => {
  const posts = [
    { id: 1, title: '블록체인 NOW', url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" },
    { id: 2, title: '블록체인 NOW', url: "https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80" },
    { id: 3, title: '블록체인 NOW', url: "https://images.unsplash.com/photo-1455906876003-298dd8c44ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1676&q=80" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px'
    // beforeChange: (current, next) => setCenterCard(next),
    // responsive: [
    //   {
    //     breakpoint: 740,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   }
    // ]
  };
  return (
    <Container>
      <Header>
        <HeaderText>새로 올라왔어요</HeaderText>
        <Tag>NEW</Tag>
      </Header>
      <StyledSlider {...settings}>
        {posts.map(post => {
          return (
            <div key={post.id}>
              <ImageContainer>
                <Image src={post.url} />
                <ContentBox>
                  <Title>{post.title}</Title>
                  <ButtonBox>
                    <Like>
                      <i className="fa-solid fa-heart"></i>
                      {' '}0
                    </Like>
                    <Share>
                      <i className="fa-solid fa-arrow-up-from-bracket"></i>
                      {' '}공유하기
                    </Share>
                  </ButtonBox>
                </ContentBox>
              </ImageContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

export default NewPosts;