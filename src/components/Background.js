import React from "react";
import Typist from 'react-typist'
import Images from "./Images";
const imageDateClass = "image-date";
const imageContentClass = "image-content";
const Background = () => {
  function isEven(n) {
    return n % 2 === 0;
  }

  function isOdd(n) {
    return Math.abs(n % 2) === 1;
  }
  const style = { marginTop: "80vh" };
  return (

      <div className="white-background">
        <div className="picture-section">
          <div className="left">
            {Images.filter((t) => t.position === "left").map((image, index) => (
              <div className="image-section">
                {image.src && (
                  <img
                    className={`image left-image`}
                    src={image.src}
                    alt={image.date}
                  />
                )}
                <div className="date-div-left">
                  <div className="circle"></div>
                  <span className={`${imageDateClass} left-date`}>
                    {image.date}
                  </span>
                </div>
                <span className={`${imageContentClass} left-content`}>
                <Typist cursor={{show:false}} >
            <Typist.Delay ms={4000} />

                    {image.content}
                  </Typist>
                </span>
              </div>
            ))}
          </div>
          <div className="right">
            {Images.filter((t) => t.position === "right").map((image, index) => (
              <div className="image-section-right">
                {image.src && (
                  <img
                    className={`image right-image`}
                    src={image.src}
                    alt={image.date}
                  />
                )}
                <div class="date-div-right">
                  <div className="circle"></div>
                  <span className={`${imageDateClass} right-date`}>
                    {image.date}
                  </span>
                </div>
                <span className={`${imageContentClass} right-content`}>
                  <Typist cursor={{show:false}}>
            <Typist.Delay ms={4000} />

                    {image.content}
                  </Typist>
                </span>
              </div>
            ))}
          </div>
         
        </div>
        <div className='bottom-text'>
            <Typist>
            <Typist.Delay ms={4000} />
              照片就发到2018年6月20日，从那往后的日子，我们也依然陪在彼此身边，做唯一的百分百。
              生日快乐，我的阿榕。不知不觉我们陪伴彼此这么多年了喔，数一数，居然有六年了！中间我也想过放弃我们的友谊，也没有那么严重，不是放弃，就是想平淡点，不过还好，你总是能死皮赖脸的过来问我到底咋了，感谢世界上为数不多所有能包容我的人，你就是其中之一。其实好像也没有什么好写的，前几年已经把想告诉你的大都都说了，再说我今年把话写完了，明年写啥哈哈哈哈？那再叮嘱你一次好了，要健康，要快乐，要独立，要自信，要勇于做决定，不管我在哪里深圳还是福州还是外太空，我都是你的美队盾牌（sorry最近刚温习完复联脑袋里冒出这个）说起来，我已经在苦恼明年的贺卡是什么样子了，因为今年这个已经是很有技术含量了，我让姚柏杨替我做的。或许，这就是男朋友是程序员的好处？生日快乐我的小美女儿，我只想告诉你，老娘长大了，以后换我来保护你，实现你每个梦（也没有每个那么夸张，就是尽量能实现就实现）。
              要你拥有会长大的的幸福，一天比一天像公主，梦都被满足。
              爱是送你会长大的幸福，用生命为你变魔术，永远被保护。
            </Typist>
          </div>
      </div>

  );
};

export default Background;
