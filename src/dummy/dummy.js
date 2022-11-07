import { StarBorder, Drafts, Send, MoveToInbox } from "@mui/icons-material";

// DRAWER.JS

const menu = [
  "1 HOME",
  "1.1 INDEX",
  "2 SERVICES",
  "2.1 SOFTWARE DEVELOPMENT",
  "2.2 ECOMMERCE",
  "2.3 WEBSITE DESIGN",
  "2.4 WEB GAME",
  "2.5 VIRTUAL EVENT",
  "2.6 ONLINE SHOWROOW",
  "2.7 3D VISUALIZATION",
  "2.8 METAVERSE",
  "3 ABOUT",
  "3.1 INTRO",
  "3.2 HOW WE DO THIS",
  "3.3 EXPERTISE AREAS",
  "3.4 OUR TEAMS",
  "3.5 CLIENTS",
  "4 CONTACT",
];

const lists = [
  {
    key: "1 HOME",
    label: "1 HOME",
    icon: MoveToInbox,
    pathname: "/",
    items: [
      {
        key: "1.1 INDEX",
        label: "1.1 INDEX",
        icon: StarBorder,
        pathname: "/",
      },
    ],
  },
  {
    key: "2 SERVICES",
    label: "2 SERVICES",
    icon: Drafts,
    pathname: "/services",
    items: [
      {
        key: "2.1   SOFTWARE DEVELOPMENT",
        label: "2.1   SOFTWARE DEVELOPMENT",
        icon: Send,
        pathname: "/services",
      },
      {
        key: "2.2 ECOMMERCE",
        label: "2.2 ECOMMERCE",
        icon: Send,
        pathname: "/services",
      },
    ],
  },
];

// GAME.JS
const panelObj = [
  {
    name: "Object002",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/1.mp4",
  },
  {
    name: "Object003",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture:
      "video/2.mp4",
  },
  {
    name: "Object004",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/3.mp4",
  },
  {
    name: "Object005",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/4.mp4",
  },
  {
    name: "Object006",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/5.mp4",
  },
  {
    name: "Object007",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/6.mp4",
  },
  {
    name: "Object008",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/7.mp4",
  },
  {
    name: "Object009",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/8.mp4",
  },
  {
    name: "Object010",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/9.mp4",
  },
  {
    name: "Object011",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/10.mp4",
  },
  {
    name: "Object012",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/11.mp4",
  },
  {
    name: "Object013",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/12.mp4",
  },
  {
    name: "Object014",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/13.mp4",
  },
  {
    name: "Object015",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/14.mp4",
  },
  {
    name: "Object016",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/15.mp4",
  },
  {
    name: "Object017",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/16.mp4",
  },
  {
    name: "Object018",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture: "video/17.mp4",
  },
];

// GAME.JS
const panelObjHouse = [
  {
    name: "panel1",
    bloom: true,
    x: 175.34,
    y: 105.11,
    z: -159.98,
    rotationX: 0,
    rotationY: 270.0,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: "img/1.png",
    videoTexture:
      "video/1.mp4",
  },
  {
    name: "panel2",
    bloom: true,
    x: 806.76,
    y: 136.39,
    z: 33.93,
    rotationX: -2.37,
    rotationY: -81.02,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: "img/7.png",
    videoTexture:
      "video/7.mp4",
  },
  {
    name: "panel3",
    bloom: true,
    x: -363.26,
    y: 94.26,
    z: -806.82,
    rotationX: 0,
    rotationY: 4.54,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: "img/3.png",
    videoTexture:
      "video/3.mp4",
  },
  {
    name: "panel4",
    bloom: true,
    x: -109.02,
    y: 131.57,
    z: -1343.64,
    rotationX: 0,
    rotationY: 2.46,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture:
      "img/9.png",
    videoTexture:
      "video/9.mp4",
  },
  {
    name: "panel5",
    bloom: true,
    x: 346.06,
    y: 126.48,
    z: -1058.83,
    rotationX: 0,
    rotationY: 270.0,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture:
      "img/5.png",
    videoTexture:
      "video/5.mp4",
  },
];

// GAME.JS
const panelFrame = [
  {
    name: "Box2131639805",
    bloom: true,
    color: "#ffffff",
  },
  {
    name: "Box2131639774",
    bloom: true,
    color: "#ffffff",
  },
  {
    name: "Box2131639774",
    bloom: true,
    color: "#ffffff",
  },
];

export { panelObj, panelFrame, lists, panelObjHouse };
