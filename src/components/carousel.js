import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const StyledSlider = styled(Slider)`
  margin: 0 auto;
  width: 65rem;
  -webkit-box-shadow: 1px 0px 9px 3px rgba(84,84,84,0.41);
  box-shadow: 1px 0px 9px 3px rgba(84,84,84,0.41);
  padding-bottom: 1rem;
  margin-bottom: 3rem;
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

  .slick-arrow {
    z-index: 10;
  }
    .slick-prev{
      left:-4rem;
      @media screen and  (max-width:400px) {
        left:-1rem;
      }
      :before {
      opacity: 1;
      color: #669cff;
      left: 0;
      font-size: 2rem;
      @media screen and  (max-width:400px) {
        font-size: 1.5rem;
        }
      }
    }
    
  .slick-next{
    right:-3rem;
    @media screen and  (max-width:400px) {
        right:-0.7rem;
      }
    :before {
      opacity: 1;
      color: #669cff;
      font-size: 2rem;
      @media screen and  (max-width:400px) {
        font-size: 1.5rem;
      }
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
  @media screen and  (max-width:450px) {
    height:22rem;
  }
`;

const Image = styled.img`
  width:100%;
  height:30rem;
  @media screen and  (max-width:450px) {
    height:22rem;
  }
`;

const Title = styled.p`
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  height: 2.5rem;
  @media screen and  (max-width:450px) {
      font-size: 1.1rem;
      height: 6rem;
  }
`
const ButtonBox = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Like = styled.div`
  width:3rem;
  color: #9D9D9D;
  @media screen and  (max-width:450px) {
      width:2.5rem;
  }
`
const Share = styled.p`
  width: 3rem;
  font-weight: 500;
  color: #9D9D9D;
  @media screen and  (max-width:450px) {
    width: 3rem;
    font-weight: 500;
    font-size: 0.8rem;
  }
`
const LinkTo = styled.a`
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
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <StyledSlider {...settings} >
      {posts.map(post => {
        return (
          <div key={post.id} >
            <ImageContainer >
              {post.sector_id !== 1 ? (
                <Link to={`/detail/${post.id}`} >
                  {post.image ? <Image src={post.image} /> : <Image src="/emptyImg.png" />}
                  <Title>{post.title}</Title>
                </Link>) : (
                <LinkTo href={post.link} target="_blank">
                  {post.image ? <Image src={post.image} /> : <Image src="/emptyImg.png" />}
                  <Title > {post.title}</Title>
                </LinkTo>
              )}
              <ButtonBox>
                <Like>
                  <i className="fa-solid fa-heart"></i>
                  {' '}0
                </Like>
                {post.sector_id !== 1 ? (
                  <Link to={`/detail/${post.id}`} target="_blank">
                    <Share>
                      <i className="fa-solid fa-arrow-up-from-bracket"></i>
                      {'  '}공유
                    </Share>
                  </Link>) : (
                  <LinkTo href={post.link} target="_blank">
                    <Share>
                      <i className="fa-solid fa-arrow-up-from-bracket"></i>
                      {'  '}공유
                    </Share>
                  </LinkTo>
                )}
              </ButtonBox>
            </ImageContainer>
          </div>
        );
      })}
    </StyledSlider>
  );
}

export default Carousel;