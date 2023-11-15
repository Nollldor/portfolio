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
        description: "Harnessing the full potential of JavaScript to create engaging and interactive user interfaces that enhance the overall user experience.",
        icon: faJs
    },
    {
        title: "REACT",
        description: "Leveraging React's modular structure to design and build applications with reusable and maintainable components.",
        icon: faReact
    },
    {
        title: "CSS",
        description: "Crafting layouts that seamlessly adapt to various screen sizes and devices, ensuring an optimal viewing experience for users.",
        icon: faCss3
    },
    {
        title: "Redux",
        description: "Implementing a centralized and predictable state container to manage application data efficiently.",
        icon: faCircleNodes
    },
    {
        title: "HTML",
        description: "Crafting web pages using semantic HTML tags to enhance accessibility and search engine optimization while ensuring a clear document structure.",
        icon: faHtml5
    }
]

