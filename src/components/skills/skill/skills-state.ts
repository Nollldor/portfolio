import {faHtml5, faJs, faReact, IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faCircleNodes} from "@fortawesome/free-solid-svg-icons";

type SkillStateType = {
    title: string
    description: string
    icon: IconDefinition
}

export const SkillsState: SkillStateType[] = [
    {
        title: "JS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: faJs
    },
    {
        title: "REACT",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: faReact
    },
    {
        title: "CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: faCss3
    },
    {
        title: "Redux",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: faCircleNodes
    },
    {
        title: "HTML",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: faHtml5
    }
]

