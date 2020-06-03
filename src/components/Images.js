import first from "../assets/第一次见面.jpg";
import second from "../assets/20141105运动会.jpg";
import third from "../assets/20141212自以为很美.jpg";
import fourth from "../assets/20150116.jpg";
import fifth from "../assets/20150206ktv回家.jpg";
import sixth from "../assets/20150327签收图.jpg";
import seventh from "../assets/20150608 回家.jpg";
import eighth from "../assets/20151105 获奖.jpg";
import nineth from "../assets/20160302.jpg";
import tenth from "../assets/20160522 合照.jpg";
import eleventh from "../assets/20160605臭脚.jpg";
import twlth from "../assets/20160908.jpg";
import thirdth13 from "../assets/2016年我生日.jpg";
import thirdth15 from "../assets/20190911.jpg";
import thirdth16 from "../assets/20190927.jpg";
import thirdth14 from "../assets/20171211.jpg";
import 实验品1 from "../assets/实验品1.jpg";
import 实验品2 from "../assets/实验品2.jpg";
import 实验品3 from "../assets/实验品3.jpg";
import 实验品4 from "../assets/实验品4.jpg";
import pic201506 from "../assets/20150613.jpg";
import pic40215 from "../assets/20151211.jpg";
import pic2018 from "../assets/2010620.jpg";
const images = [
  {
    src: first,
    date: "2014年9月13日",
    content:
      "第一次见你有点不太顺眼，但后来来关系那么密切。第一眼看到你，感觉你是很有家教，对人亲切但实际是很难亲近的人。还好，有“爱自拍”这个共同点，使我们很快走到一起啦！",
    position: "left",
  },
  {
    src: second,
    date: " 2014年11月15日",
    content:
      "运动会结束，坐在宿舍地上自拍，请根据这张图片算出当时地板有多干净，答案以灰尘为单位。",
    position: "right",
  },
  {
    src: third,
    date: " 2014年12月12日",
    content:
      "不得不说，刚上大学那会活动真的蛮多，您还是蛮热心的喔。还记得吗，这是你参加和物理系的联谊晚会，跳舞来着，提问，请问你当时的搭档是谁？btw当时的化妆技术的真的烂到没边，更恐怖的是，当时我们觉得自己很美！",
    position: "left",
  },
  {
    src: fourth,
    date: "2015年1月16日",
    content:
      "菲姐真是一个神奇的存在，一人拿她一条围巾，化个妆唱了一晚上的空城和答案吧，当时真的没有被觉得吵吗！",
    position: "right",
  },
  {
    src: fifth,
    date: "2015年2月6日",
    content:
      "其实好像不是这个日子，我是看相册上传图片的时间算的。是大一寒假回家前，大家一起去ktv然后回宿舍的路上。珍藏图片，今天再拿来看还挺艺术的，就是我糊的不够美。",
    position: "left",
  },
  {
    src: sixth,
    date: "2015年3月27日",
    content:
      "上了大二，关系越发的好，开始流行“姐妹装”啦！不得不说现在看我那个包还是很好看啊，就是我的鞋子……下场有点惨。",
    position: "right",
  },
  {
    src: seventh,
    date: "2015年6月8日",
    content:
      "这是大二暑假吧，砸门节假日总是一起回家，我能不能自诩是陪你坐动车最多次的人呢目前哈哈哈哈。",
    position: "left",
  },
  {
    src: eighth,
    date: "2015年11月5日",
    content:
      "大学的时候你参加的活动真的是有够多的，特别是竞赛类。而我着实没有那个胆量，但是呢，我也很乐于当你的top fan，能当你每一场比赛的观众，也是我大学最值得回忆的事情之一。大概有一种女儿很出息的感觉，当观众的时候，总想告诉旁边的人，台上那个是我舍友，厉害吧？",
    position: "right",
  },
  {
    src: nineth,
    date: "2016年3月2日",
    content:
      "美女我的衣服好看吗？我们好像会偶尔交换衣服诶！记得当时总喜欢为你出谋划策穿什么衣服，我们也总是鼓励彼此，要穿一些自己喜欢的衣服，即使那些衣服相对的比较暴露。感谢有你，你是我实现穿衣自由路上的一盏明灯，笑死了，这是一个很土的比喻。",
    position: "left",
  },
  {
    src: tenth,
    date: "2016年5月22日",
    content:
      "系情景剧大赛结束的合影，这部剧能算我们大学表演的巅峰吗？毕竟登上了校级殿堂哈哈哈，我们一起参加的表演活动，扮演不同的人物，但是最后，我们还是我们，是陪伴彼此的老演员了。",
    position: "right",
  },
  {
    src: eleventh,
    date: "2016年6月5日",
    content:
      "心里情景剧刚结束，又要赶场来英文剧组了，这是臭脚公主结束后的自拍，谢谢你，谢谢所有组员，圆了我一个公主梦。",
    position: "left",
  },
  {
    src: twlth,
    date: "2016年9月8日",
    content: "一起当长不大的孩子。",
    position: "right",
  },
  {
    src: thirdth13,
    date: "2016年11月3日",
    content:
      "老娘的生日，终于又穿上了姐妹装喔。麻烦看清，你的衣服带断了，难怪后来老娘的衣服带也断了，或许这就是命中注定吧？",
    position: "left",
  },
  {
    src: thirdth14,
    date: "2017年12月11日",
    content:
      "吃掉即将过去的2017年，一起迎接即将迎来的更糟糕的（跟你在一起的时光是美好的）的2018年",
    position: "right",
  },
  {
    src2: thirdth15,
    date: "",
    content: "",
    position: "left",
  },
  {
    src: thirdth16,
    date: "2019年9月11日",
    content: "你陪我从女人变女孩（其实就是剪短发）",
    position: "left",
  },
  {
    src: 实验品1,
    date: "",
    content: "",
    position: "right",
  },
  {
    src: 实验品2,
    date: "",
    content: "",
    position: "right",
  },
  {
    src: 实验品3,
    date: "",
    content: "",
    position: "right",
  },
  {
    src: pic201506,
    date: "",
    content: "",
    position: "right",
  },
  {
    src: pic40215,
    date: "",
    content: "",
    position: "right",
  },
  {
    src: 实验品4,
    date: "2017年12月11日",
    content:
      "四年里，你总是当我的实验品，回头想想，老娘当年放下的错也不少。卷进电卷板的头发，魔鬼天使的妆容，下手太重的阴影……如今已经没有人当我的小白鼠啦，导致我的tony技艺下降少！请你好好欣赏你曾经的时尚造型吧~",
    position: "right",
  },
  {
    src: pic2018,
    date: "2018年6月14日",
    content:
      "恭喜我们，毕业啦！离开我们认识、住过、哭过、生气过、停电过、停水过、打蟑螂过、的地方。真的庆幸还好我们都是福州人哦，不然毕业之后基本没机会见面吧。",
    position: "left",
  },
  {
    src: pic2018,
    date: "2018年6月14日",
    content:
      "恭喜我们，毕业啦！离开我们认识、住过、哭过、生气过、停电过、停水过、打蟑螂过、的地方。真的庆幸还好我们都是福州人哦，不然毕业之后基本没机会见面吧。",
    position: "left",
  },

];

export default images;
