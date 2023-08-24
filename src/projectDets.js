import financier from "./assets/financier.png";
import dunder from "./assets/dunder.png";
import epic from "./assets/epic.png";
import fresheries from "./assets/fresheries.png";
import screenshot from "./assets/screenshot.png";

const projects = [
  {
    type: "FullStack",
    img: financier,
    name: "Financier",
    about:
      "An app made using ReactJS, ExpressJS and MongoDB that logs and helps to visualize the user's financial transactions.",
    github: "https://github.com/Zuhu162/financier-complete",
    // project: "https://financier-sys.herokuapp.com/",
    btn: "projectBtn1Disabled",
  },
  {
    type: "FullStack",
    img: screenshot,
    name: "Screenshot Scraper",
    about:
      "Powered by Puppeteer and Nodemailer - Schedule a program that can take screenshots of websites at regular intervals, which are directly mailed to your inbox",
    github: "https://github.com/Zuhu162/screenshot_scraper",
    // project: "https://screenshot-scraper123.herokuapp.com/",
    btn: "projectBtn1Disabled",
  },
  {
    type: "FrontEnd",
    img: epic,
    name: "Epic Games Clone",
    about:
      "A clone of the Epic Games desktop client using ReactJS and MUI. Personally I am a big fan of the simplistic yet modern look of the Epic Games Store. So, I naturally had to make a clone of it and test my frontend skills at the same time",
    github: "https://github.com/Zuhu162/epicgames-clone",
    project: "https://vigorous-montalcini-7eef92.netlify.app",
    btn: "projectBtn1",
  },
  {
    type: "FullStack",
    img: dunder,
    name: "DunderMifflin_Sys",
    about:
      "A project that combines my love for sitcoms and interest towards programming - an Office Management tool that is packed heavy with features and visualizers of day-to-day office chores",
    github: "https://github.com/Zuhu162/dund-sys-client",
    project: "https://eloquent-lamport-dbc1e6.netlify.app/",
    btn: "projectBtn1",
  },
  {
    type: "FrontEnd",
    img: fresheries,
    name: "Fresheries - Redux",
    about:
      "This project is my first exposure in using Redux for a project. Was a fantastic way to dip my toes in such a powerful tool. Look forward to using it more in larger scale future projects",
    github: "https://github.com/Zuhu162/redux-fresheries-client",
    project: "https://objective-fermat-dfd74b.netlify.app/",
    btn: "projectBtn1",
  },
];

export default projects;
