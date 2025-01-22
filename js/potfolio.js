const lenis = new Lenis({
  autoRaf: true,
});

// Show Current Time

let Hour = document.querySelector(".Hour");
let Minut = document.querySelector(".Minut");
let Pre = document.querySelector(".Per");

function ShowTime() {
  let FullTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    timeStyle: "short",
    hourCycle: "h12",
  });

  Hour.innerHTML = FullTime;
}
ShowTime();
setInterval(ShowTime, 1000);

// Show Current Surat Temp

let LiveTemp = document.querySelector(".LiveTemp");

function ShowTemp() {
  let P = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=6d441d68bb47c830ad80c3956ab89689&units=metric"
  );

  P.then((Responce) => {
    return Responce.json();
  }).then((Data) => {
    LiveTemp.innerHTML = String(Data.main.temp).split(".")[0];
  });
}
ShowTemp();
setInterval(ShowTemp, 300000);

// Adding Data Dynamically

const ItemDetail = [
  {
    id: 0,
    Size: "Big",
    link: "https://work.vaux.co.in/Jordan-Prince/",
    Image: "../img/Thumbnail-1.mp4",
    posture: "img/Jordan-Prince-1.png",
    Main: "Jordan Prince",
    Des: "- Javascript based project with best user interface and Animation",
    Brading: ["Web Development"],
  },
  {
    id: 1,
    Size: "Small",
    link: "https://maser.live/",
    Image: "../img/Thumbnail-2.mp4",
    posture: "img/maser-wp.png",
    Main: "Maser",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Wordpress"],
  },
  {
    id: 2,
    Size: "big",
    link: "https://starkfeld.com/en",
    Image: "../img/Thumbnail-3.mp4",
    posture: "img/starkfeld-shopify-2.png",
    Main: "Starkfeld",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Shopify"],
  },
  {
    id: 3,
    Size: "Small",
    link: "https://www.astrosukh.com/",
    Image: "../img/Thumbnail-4.mp4",
    posture: "img/astrosukh-react.png",
    Main: "Astrosukh",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 4,
    Size: "Small",
    link: "https://sgs-daas.com/",
    Image: "../img/Thumbnail-3.mp4",
    posture: "img/sgs-wp.png",
    Main: "SGS",
    Des: "- A digital platform that streamlines operations and delivers real-time insights.",
    Brading: ["Web Development"],
  },
  {
    id: 5,
    Size: "Big",
    link: "https://www.giliarto.com/",
    Image: "../img/Thumbnail-5.mp4",
    posture: "img/giliarto-shopify.png",
    Main: "Giliarto",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Shopify"],
  },
  {
    id: 6,
    Size: "Small",
    link: "https://work.vaux.co.in/geeklingo/",
    Image: "../img/Thumbnail-3.mp4",
    posture: "img/geeklingo.png",
    Main: "Geeklingo",
    Des: "- Revolutionizing energy-efficient solutions for a sustainable future.",
    Brading: ["Web Development"],
  },
  {
    id: 7,
    Size: "Big",
    link: "https://montemagency.com/",
    Image: "../img/Thumbnail-7.mp4",
    posture: "img/ScreenshotThre.png",
    Main: "Montemagency",
    Des: "- Empowering brands with innovative marketing strategies and creative solutions for digital growth.",
    Brading: ["Wordpress"],
  },
  {
    id: 8,
    Size: "Small",
    link: "https://starkfeld.com/en",
    Image: "../img/Thumbnail-9.mp4",
    posture: "img/Screenshotfive.png",
    Main: "Starkfeld",
    Des: "- Transforming businesses with cutting-edge IT solutions and expert consulting for digital success.",
    Brading: ["Shopify"],
  },
  {
    id: 9,
    Size: "Small",
    link: "https://work.vaux.co.in/quarter/",
    Image: "../img/Thumbnail-6.mp4",
    posture: "img/quarter.png",
    Main: "quarter",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 10,
    Size: "Big",
    link: "https://qldem.com.au/",
    Image: "../img/Thumbnail-2.mp4",
    posture: "img/qldem-wp-3.png",
    Main: "Qldem",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Wordpress"],
  },
  {
    id: 11,
    Size: "Big",
    link: "https://himsure.com/",
    Image: "../img/Thumbnail-4.mp4",
    posture: "img/himsure-react.png",
    Main: "Himsure",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 12,
    Size: "Big",
    link: "https://kingcajuncrawfishdrphilips.com/",
    Image: "../img/Thumbnail-1.mp4",
    posture: "img/kingcajuncrawfishdrphilips-wp.png",
    Main: "kingcajuncrawfishdrphilips",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Wordpress"],
  },
  {
    id: 13,
    Size: "Small",
    link: "https://www.toolsbond.com/",
    Image: "../img/Thumbnail-3.mp4",
    posture: "img/toolsbond-shopify.png",
    Main: "toolsbond",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Shopify"],
  },
  {
    id: 14,
    Size: "Small",
    link: "https://nibiai.netlify.app/",
    Image: "../img/Thumbnail-6.mp4",
    posture: "img/Nibi.png",
    Main: "Nibi",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 15,
    Size: "Big",
    link: "https://ishaexportimport.com/",
    Image: "../img/Thumbnail-5.mp4",
    posture: "img/ishaexportimport-wp.png",
    Main: "Isha export import",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Wordpress"],
  },
  {
    id: 16,
    Size: "Big",
    link: "https://work.vaux.co.in/mobiweb/",
    Image: "../img/Thumbnail-7.mp4",
    posture: "img/mobiweb.png",
    Main: "Mobiweb",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 17,
    Size: "Big",
    link: "https://orbikelectronics.com/",
    Image: "../img/Thumbnail-9.mp4",
    posture: "img/orbikelectronics-wp.png",
    Main: "Orbikel Ectronics",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Wordpress"],
  },
  {
    id: 18,
    Size: "Small",
    link: "https://work.vaux.co.in/thepixelpatron/",
    Image: "../img/Thumbnail-2.mp4",
    posture: "img/pixels.png",
    Main: "Pixels",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 19,
    Size: "Big",
    link: "https://work.vaux.co.in/rk-book/",
    Image: "../img/Thumbnail-1.mp4",
    posture: "img/rkbook.png",
    Main: "RK book",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 20,
    Size: "Small",
    link: "https://work.vaux.co.in/sawit/",
    Image: "../img/Thumbnail-4.mp4",
    posture: "img/sawit-1.png",
    Main: "Sawit",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 21,
    Size: "Big",
    link: "https://thequickreach.com/",
    Image: "../img/Thumbnail-3.mp4",
    posture: "img/thequickreach-wp.png",
    Main: "the quick reach",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Wordpress"],
  },
  {
    id: 22,
    Size: "Big",
    link: "https://www.shipxpost.com/",
    Image: "../img/Thumbnail-7.mp4",
    posture: "img/shipxpost.png",
    Main: "Shipxpost",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 23,
    Size: "Small",
    link: "https://work.vaux.co.in/effidrive/",
    Image: "../img/Thumbnail-6.mp4",
    posture: "img/effidrive.png",
    Main: "Effidrive",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  {
    id: 24,
    Size: "Small",
    link: "https://work.vaux.co.in/h8ro/",
    Image: "../img/Thumbnail-4.mp4",
    posture: "img/H8RO.png",
    Main: "h8ro",
    Des: "- Redesigning new and beauty professionals.",
    Brading: ["Web Development"],
  },
  //   {
  //     id: 25,
  //     Size: "Big",
  //     link: "#",
  //     Image: "../img/Thumbnail-7.mp4",
  //     posture: "",
  //     Main: "Create App",
  //     Des: "- Redesigning new and beauty professionals.",
  //     Brading: ["Branding" , "Branding"],
  //   },
];

let FirstCol = document.querySelector(".FirstCol");
let SecondCol = document.querySelector(".SecondCol");
let ThirdCol = document.querySelector(".ThirdCol");

let UIUX = [];
let Marketing = [];
let Branding = [];
let Web = [];
let App = [];
let Wordpress = [];
let Shopify = [];

let ArrayOfCount = [0, 0, 0, 0, 0, 0, 0, 0];

let LineNum = document.querySelectorAll(".LineNum");

function ShowCount() {
  LineNum.forEach((Span, idx) => {
    Span.innerHTML = ArrayOfCount[idx];
  });
}

let PrintCard = [...ItemDetail];

// window.addEventListener("load", () => {
//     window.scrollTo(0, 500);
// })
let ScrollUp = document.querySelector("#ScrollUp");
let ForAlign = document.querySelector(".ForAlign"); // For ScrollUp Page When We Click On NavBtn And BrandLink
let Count = -1;

function AppendChild(FirstCol, SecondCol, ThirdCol, Card1) {
  let FirstColHeight = FirstCol.offsetHeight;
  let SecondColHeight = SecondCol.offsetHeight;
  let ThirdColHeight = ThirdCol.offsetHeight;
  Count = Count + 1;
  // console.log(Count)

  let MinHeight = Math.min(FirstColHeight, SecondColHeight, ThirdColHeight);

  // if (Count > ItemDetail.length) {
  //     ForAlign.style.height = "10000px";
  //     console.log("object")
  // }

  if (FirstColHeight == MinHeight) {
    FirstCol.append(Card1);
  } else if (SecondColHeight == MinHeight) {
    SecondCol.append(Card1);
  } else if (ThirdColHeight == MinHeight) {
    ThirdCol.append(Card1);
  } else {
    FirstCol.append(Card1);
  }
}

function MakeCard(PrintAllCard) {
  PrintAllCard.forEach((Item, idx) => {
    ArrayOfCount[0]++;
    let Card1 = document.createElement("div");
    Card1.className = "Card1";
    Card1.classList.add(`CardOfId${Item.id}`);

    let ListContainer = [];

    Item.Brading.forEach((Brand) => {
      if (Brand == "UI UX Design") {
        ArrayOfCount[1]++;
        UIUX.push(`${Item.id}`);
      } else if (Brand == "Marketing") {
        ArrayOfCount[2]++;
        Marketing.push(`${Item.id}`);
      } else if (Brand == "Branding") {
        ArrayOfCount[3]++;
        Branding.push(`${Item.id}`);
      } else if (Brand == "Web Development") {
        ArrayOfCount[4]++;
        Web.push(`${Item.id}`);
      } else if (Brand == "App Development") {
        ArrayOfCount[5]++;
        App.push(`${Item.id}`);
      } else if (Brand == "Wordpress") {
        ArrayOfCount[6]++;
        Wordpress.push(`${Item.id}`);
      } else if (Brand == "Shopify") {
        ArrayOfCount[7]++;
        Shopify.push(`${Item.id}`);
      }

      let List = document.createElement("li");
      List.classList.add("LinkBtn");
      List.innerHTML = `${Brand}`;
      ListContainer.push(List);
    });

    if (ListContainer.length != 0) {
      ListContainer[0].classList.add("FirstBrand");
    }

    let CheckSize = () => {
      if (Item.Size == "Big") {
        return "BigSize";
      } else if (Item.Size == "Small") {
        // console.log("object")
        return "SmallSize";
      }
    };

    // <img class="ImgClass" src="${Item.Image}" alt=""></img>
    // Card1.innerHTML = `
    //     <a class="ImgLink ${CheckSize()}" href="#"><img class="ImgClass imgnum${Item.id}" src="" alt=""></img></a>

    //     <div class="CardBody">
    //         <a class="DecLink" href="#">
    //             <div class="Description">
    //                 <span class="HeadingOfDec">${Item.Main}</span>
    //                 ${Item.Des}
    //             </div>
    //         </a>

    //         <a class="BrandingLink" >
    //             <ul class="Branding IdToAddList${idx}">

    //             </ul>
    //         </a>
    //     </div>
    //     `

    Card1.innerHTML = `
          <a class="ImgLink ${CheckSize()}" href=${
      Item.link
    } target="_blank"><video class="ImgClass videoPlay imgnum${
      Item.id
    }" src="" alt="" muted poster=${Item.posture}></video></a>

          <div class="CardBody">
              <a class="DecLink" href="#">
                  <div class="Description">
                      <span class="HeadingOfDec">${Item.Main}</span>
                      ${Item.Des}
                  </div>
              </a>

              <a class="BrandingLink" >
                  <ul class="Branding IdToAddList${idx}">
                                      
                  </ul>
              </a>
          </div>
          `;

    AppendChild(FirstCol, SecondCol, ThirdCol, Card1);

    let UL = document.querySelector(`.IdToAddList${idx}`);
    ListContainer.forEach((ListItem) => {
      UL.append(ListItem);
    });

    let ImgPath = Item.img;
    let ImgToAddUrl = document.querySelector(`.imgnum${Item.id}`);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${ImgPath}`);
    xhr.responseType = "arraybuffer";
    xhr.onload = (evt) => {
      let blob = new Blob([xhr.response]);
      let Url = URL.createObjectURL(blob);
      ImgToAddUrl.src = Url;
    };
    xhr.send();

    ShowCount();
  });
}
MakeCard(PrintCard);

// Text Animation
let Texts = document.querySelectorAll(".TextAnimation");

Texts.forEach((Text, idx) => {
  let TextContainer = document.createElement("div");
  TextContainer.classList.add("block");

  let InnerText = Text.innerText;
  Text.innerHTML = "";

  for (let Letter of InnerText) {
    let span = document.createElement("span");
    span.classList.add("letter");
    span.innerText = Letter == " " ? "\u00A0" : Letter;

    TextContainer.append(span);
  }

  Text.append(TextContainer);
  Text.append(TextContainer.cloneNode(true));
});

// Removing Card

let AllCard = [];

for (let i = 0; i < ItemDetail.length; i++) {
  AllCard.push(document.querySelector(`.CardOfId${i}`));
}

let NavLinks = document.querySelectorAll(".NavLink");
let TitleForSmallDevice = document.querySelector(".titleForBrand");

NavLinks.forEach((NavBtn, idx) => {
  NavBtn.addEventListener("click", (evt) => {
    NavLinks.forEach((Nav) => {
      Nav.classList.remove("ActiveNavLink");
    });

    ForAlign.style.height = "1000000px";
    setTimeout(() => {
      ForAlign.style.height = "auto";
      lenis.scrollTo(500, {});
    }, 0.5);

    NavBtn.classList.add("ActiveNavLink");

    if (idx == 0) {
      TitleForSmallDevice.innerText = "Explore all";
    } else if (idx == 1) {
      TitleForSmallDevice.innerText = "UI UX Design";
    } else if (idx == 2) {
      TitleForSmallDevice.innerText = "Marketing";
    } else if (idx == 3) {
      TitleForSmallDevice.innerText = "Branding";
    } else if (idx == 4) {
      TitleForSmallDevice.innerText = "Web Development";
    } else if (idx == 5) {
      TitleForSmallDevice.innerText = "App Development";
    } else if (idx == 6) {
      TitleForSmallDevice.innerText = "Wordpress";
    } else if (idx == 7) {
      TitleForSmallDevice.innerText = "Shopify";
    }
  });
});

NavLinks[0].addEventListener("click", (evt) => {
  AllCard.forEach((Card) => {
    Card.style.display = "none";
  });

  AllCard.forEach((Card) => {
    AppendChild(FirstCol, SecondCol, ThirdCol, Card);
    Card.style.display = "flex";
  });
});

let Click = document.querySelector(".Click");

Click.addEventListener("click", (evt) => {
  AllCard.forEach((Card) => {
    Card.style.display = "none";
  });

  AllCard.forEach((Card) => {
    AppendChild(FirstCol, SecondCol, ThirdCol, Card);
    Card.style.display = "flex";
  });
});

setTimeout(() => {
  Click.click();
}, 0.5);

function ChangeDir(Section) {
  AllCard.forEach((Card) => {
    Card.style.display = "none";
  });

  let CardPrint = [];

  Section.forEach((ActiveCard) => {
    CardPrint.push(AllCard[ActiveCard]);
  });

  CardPrint.forEach((Appear) => {
    AppendChild(FirstCol, SecondCol, ThirdCol, Appear);
    Appear.style.display = "flex";
  });
}

function ChooseDir(ActiveBrand) {
  ChangeDir(ActiveBrand);
}

NavLinks.forEach((NavBtn, idx) => {
  NavBtn.addEventListener("click", (evt) => {
    checkForItem();
    if (idx == 1) {
      ChooseDir(UIUX);
    } else if (idx == 2) {
      ChooseDir(Marketing);
    } else if (idx == 3) {
      ChooseDir(Branding);
    } else if (idx == 4) {
      ChooseDir(Web);
    } else if (idx == 5) {
      ChooseDir(App);
    } else if (idx == 6) {
      ChooseDir(Wordpress);
    } else if (idx == 7) {
      ChooseDir(Shopify);
    }
  });
});
const ToKnowActiveLink = document.querySelectorAll(".ToKnowActiveLink");
const checkForItem = () => {
  if (UIUX.length == 0) {
    ToKnowActiveLink[1].style.display = "none";
    LineNum[1].style.display = "none";
  }
  if (Marketing.length == 0) {
    ToKnowActiveLink[2].style.display = "none";
    LineNum[2].style.display = "none";
  }
  if (Branding.length == 0) {
    ToKnowActiveLink[3].style.display = "none";
    LineNum[3].style.display = "none";
  }
  if (Web.length == 0) {
    ToKnowActiveLink[4].style.display = "none";
    LineNum[4].style.display = "none";
  }
  if (App.length == 0) {
    ToKnowActiveLink[5].style.display = "none";
    LineNum[5].style.display = "none";
  }
  if (Wordpress.length == 0) {
    ToKnowActiveLink[6].style.display = "none";
    LineNum[6].style.display = "none";
  }
  if (Shopify.length == 0) {
    ToKnowActiveLink[7].style.display = "none";
    LineNum[7].style.display = "none";
  }
};
checkForItem();

// setTimeout(() => {
//       ChooseDir(Web);
// }, 0);

// gsap.registerPlugin(ScrollTrigger);

let ColFirstForAni = document.querySelector(".ColFirstForAni");
let ColSecondForAni = document.querySelector(".ColSecondForAni");
let ColThirdForAni = document.querySelector(".ColThirdForAni");

window.addEventListener("load", () => {
  if (window.innerWidth > 576) {
    lenis.on("scroll", (onScroll) => {
      let { scroll } = onScroll;
      ColSecondForAni.style.transform = `translateY(-${scroll * 0.071}px)`;
      ColThirdForAni.style.transform = `translateY(-${scroll * 0.05}px)`;
    });
  }
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});

let Media = gsap.matchMedia();

let CardInFirstCol = document.querySelectorAll(".Card1");
// let CopyRight = document.querySelector(".CopyRight");
let ViewPro = document.querySelector(".ViewPro");
let ImgLink = document.querySelectorAll(".ImgLink");
let videoPlay = document.querySelectorAll(".videoPlay");
console.log("ImgLink");
ImgLink.forEach((ImageHover, idx) => {
  ImageHover.addEventListener("mouseenter", (evt) => {
    ViewPro.style.transform = "scale(1)";
    ViewPro.style.transition = "0.2s";
    ViewPro.style.cursor = "none";
    //   videoPlay[idx].play();
  });

  ImageHover.addEventListener("mouseleave", (evt) => {
    ViewPro.style.transform = "scale(0)";
    ViewPro.style.transition = "0.2s";
    //   videoPlay[idx].pause();
  });

  ImageHover.addEventListener("mousemove", (event) => {
    let ValueX = ViewPro.offsetWidth;
    let ValueY = ViewPro.offsetHeight;

    setTimeout(() => {
      ViewPro.style.top = `${event.pageY - ValueY / 2}px`;
      ViewPro.style.left = `${event.pageX - ValueX / 2}px`;
    }, 2);
    ViewPro.style.transition = "0s";
  });
});

CardInFirstCol.forEach((CardRemContextMenu) => {
  CardRemContextMenu.addEventListener("contextmenu", (evt) => {
    evt.preventDefault();
    // CopyRight.style.top = `${evt.pageY}px`;
    // CopyRight.style.left = `${evt.pageX}px`;
    // CopyRight.style.display = "inline-block";
  });
});

// document.addEventListener("mousemove", (evt) => {
//     CopyRight.style.display = "none";
// })

let Link = document.querySelectorAll(".LinkBtn");

setTimeout(() => {
  Link.forEach((minLink) => {
    minLink.style.cursor = "pointer";
    minLink.addEventListener("click", (evt) => {
      ForAlign.style.height = "1000000px";
      setTimeout(() => {
        ForAlign.style.height = "auto";
      }, 0);
      window.scrollTo(0, 500);

      if (evt.target.innerText == "UI UX Design") {
        ChooseDir(UIUX);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[1].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "UI UX Design";
      } else if (evt.target.innerText == "Marketing") {
        ChooseDir(Marketing);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[2].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "Marketing";
      } else if (evt.target.innerText == "Branding") {
        ChooseDir(Branding);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[3].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "Branding";
      } else if (evt.target.innerText == "Web Development") {
        ChooseDir(Web);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[4].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "Web Development";
      } else if (evt.target.innerText == "App Development") {
        ChooseDir(App);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[5].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "App Development";
      } else if (evt.target.innerText == "Wordpress") {
        ChooseDir(Wordpress);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[6].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "Wordpress";
      } else if (evt.target.innerText == "Shopify") {
        ChooseDir(Shopify);

        NavLinks.forEach((Nav) => {
          Nav.classList.remove("ActiveNavLink");
        });

        NavLinks[7].classList.add("ActiveNavLink");
        TitleForSmallDevice.innerText = "Shopify";
      }
    });
  });
}, 0.5);

// SideBar

let SideBarBtn = document.querySelector(".MiniNav");
let SideBar = document.querySelector(".SideBar");
let Icon = document.querySelector(".Icon");
let ScreenCancle = document.querySelector(".Screen");
let NavOpa = document.querySelector(".NavLinks");

SideBarBtn.addEventListener("click", (evt) => {
  Icon.classList.toggle("ActiveIcon");
  SideBar.classList.toggle("ShowNavBar");
  document.body.classList.toggle("DisableScroll");
  ScreenCancle.classList.toggle("ShowScreen");
  NavOpa.classList.toggle("ActiveNavLi");
});

ScreenCancle.addEventListener("click", (evt) => {
  Icon.classList.toggle("ActiveIcon");
  SideBar.classList.toggle("ShowNavBar");
  document.body.classList.toggle("DisableScroll");
  ScreenCancle.classList.toggle("ShowScreen");
  NavOpa.classList.toggle("ActiveNavLi");
});
