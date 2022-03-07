import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledSlider = styled(Slider)`
  -webkit-box-shadow: 1px 0px 9px 3px rgba(84,84,84,0.41);
  box-shadow: 1px 0px 9px 3px rgba(84,84,84,0.41);
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  .slick-arrow {
    z-index: 10;
  }
    .slick-prev{
      left:-4rem;
      :before {
      opacity: 1;
      color: #669cff;
      left: 0;
      font-size: 2rem;
      }
    }
    
  .slick-next{
    right:-3rem;
    :before {
      opacity: 1;
      color: #669cff;
      font-size: 2rem;
    }
  }
  .slick-dots{
    height: 0rem;
  }
  .slick-dots li button:before{
    color: #669cff;
    opacity: 0.3;
  }
  .slick-dots li.slick-active button:before{
    color: #669cff;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width:100%;
  height:30rem;
`;

const Image = styled.img`
  width:100%;
  height:30rem;
`;

const ContentBox = styled.div`
  margin: 0 1rem;

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

const Carousel = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
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
  );
}

export default Carousel;