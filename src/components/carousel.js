import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const StyledSlider = styled(Slider)`
  margin: 0 auto;
  width: 65rem;
  -webkit-box-shadow: 1px 0px 9px 3px rgba(84, 84, 84, 0.41);
  box-shadow: 1px 0px 9px 3px rgba(84, 84, 84, 0.41);
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  background: #fff;

  @media screen and (max-width: 1500px) {
    width: 50rem;
  }
  @media screen and (max-width: 1300px) {
    width: 40rem;
  }
  @media screen and (max-width: 1000px) {
    width: 27rem;
  }
  @media screen and (max-width: 600px) {
    width: 15rem;
  }
  @media screen and (max-width: 400px) {
    width: 12rem;
    height: 33rem;
  }

  .slick-arrow {
    z-index: 10;
  }
  .slick-prev {
    left: -4rem;
    @media screen and (max-width: 400px) {
      left: -1rem;
    }
    :before {
      opacity: 1;
      color: #669cff;
      left: 0;
      font-size: 2rem;
      @media screen and (max-width: 400px) {
        font-size: 1.5rem;
      }
    }
  }

  .slick-next {
    right: -3rem;
    @media screen and (max-width: 400px) {
      right: -0.7rem;
    }
    :before {
      opacity: 1;
      color: #669cff;
      font-size: 2rem;
      @media screen and (max-width: 400px) {
        font-size: 1.5rem;
      }
    }
  }
  .slick-dots {
    height: 0rem;
  }
  .slick-dots li button:before {
    color: #669cff;
    opacity: 0.3;
  }
  .slick-dots li.slick-active button:before {
    color: #669cff;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 30rem;
  @media screen and (max-width: 450px) {
    height: 22rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: fill;
  background: rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 450px) {
    height: 22rem;
  }
`;

const Title = styled.p`
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  height: 2.5rem;
  @media screen and (max-width: 450px) {
    font-size: 1.1rem;
    height: 6rem;
  }
`;
const ButtonBox = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Like = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform ease 1s;
  color: ${(props) => (props.color ? "#aaa" : "red")};
  font-weight: 400;
  padding-right: 20px;

  .fa-heart {
    color: ${(props) => (props.color ? "#aaa" : "red")};
    margin-right: 3px;
    transform: scale(1.2);
  }
`;
const Share = styled.p`
  width: 3rem;
  font-weight: 500;
  color: #9d9d9d;
  @media screen and (max-width: 450px) {
    width: 3rem;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;
const LinkTo = styled.a``;

const Likes = (id) => {
  // 좋아요 기능
  let like_cnt = 0;
  let like_bool = false;

  if (localStorage.getItem(id)) {
    const more = JSON.parse(localStorage.getItem(id))[0];
    like_cnt += more;
    like_bool = JSON.parse(localStorage.getItem(id))[1];
  }

  const [LikeNums, setLikeNums] = useState(like_cnt);
  const [LikeBools, setLikeBools] = useState(like_bool);

  const LikeClick = () => {
    if (!LikeBools) {
      /* 좋아요를 누르지 않은 경우 */
      setLikeBools(!LikeBools);
      setLikeNums(LikeNums + 1);
      if (localStorage.getItem(id)) {
        const more = JSON.parse(localStorage.getItem(id))[0];
        localStorage.setItem(id, JSON.stringify([more + 1, true]));
      } else {
        localStorage.setItem(id, JSON.stringify([1, true]));
      }
    } else {
      /* 좋아요를 누른 경우 */
      setLikeBools(!LikeBools);
      setLikeNums(LikeNums - 1);
      const more = JSON.parse(localStorage.getItem(id))[0];
      localStorage.setItem(id, JSON.stringify([more - 1, false]));
    }
  };
  return (
    <>
      <Like onClick={LikeClick} color={!LikeBools}>
        <i className="fa-solid fa-heart"></i>
        {LikeNums}
      </Like>
    </>
  );
};

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
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <ImageContainer>
              {post.sector_id !== 1 ? (
                <Link to={`/detail/${post.id}`}>
                  {post.image ? (
                    <Image src={post.image} />
                  ) : (
                    <Image src="https://miro.medium.com/max/1400/1*13aMsbLvJjlg4NLltX3nLA.jpeg" />
                  )}
                  <Title>{post.title}</Title>
                </Link>
              ) : (
                <LinkTo href={post.link} target="_blank">
                  {post.image ? (
                    <Image src={post.image} />
                  ) : (
                    <Image src="https://miro.medium.com/max/1400/1*13aMsbLvJjlg4NLltX3nLA.jpeg" />
                  )}
                  <Title> {post.title}</Title>
                </LinkTo>
              )}
              <ButtonBox>
                <Likes />
                {post.sector_id !== 1 ? (
                  <Link to={`/detail/${post.id}`} target="_blank">
                    <Share>
                      <i className="fa-solid fa-arrow-up-from-bracket"></i>
                      {"  "}공유
                    </Share>
                  </Link>
                ) : (
                  <LinkTo href={post.link} target="_blank">
                    <Share>
                      <i className="fa-solid fa-arrow-up-from-bracket"></i>
                      {"  "}공유
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
};

export default Carousel;
