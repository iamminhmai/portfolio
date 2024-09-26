import coming from "../../assets/images/coming.jpg"
import retirement from "../../assets/images/retirement.jpg"
import foodie from "../../assets/images/foodie.jpg"
import studify from "../../assets/images/studify.jpg"

export const projectsData = [
    {
        id: 1,
        src: coming,
        alt: "Coming Soon",
        title: "Coming Soon...",
        description: "A new project will be launching soon!!",
        link: ""

    },
    {
        id: 2,
        src: retirement,
        role: ["Frontend"],
        alt: "Retirement Adequacy",
        title: "Retirement Adequacy",
        description: "Allow workers to access retirement estimates",
        link: "https://retirement-adequacy-test-c83be212b50e.herokuapp.com/"
    },
    {
        id: 3,
        src: studify,
        role: ["Frontend", "UI/UX"],
        alt: "Studify",
        title: "Studify",
        description: "Create study groups and enjoy a tailored experience",
        link: "https://studify-883c3.web.app/"
    },
    {
        id: 4,
        src: foodie,
        role: ["Frontend", "Backend"],
        alt: "Foodie Finder",
        title: "Foodie Finder",
        description: "Connect food lovers with quick, affordable meals",
        link: "https://foodiefinder.minh-mai.me/"
    }
];