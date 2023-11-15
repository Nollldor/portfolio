import work1Image from "../../common/img/work-img1.jpg"

type WorkStateType = {
    title: string
    subtitle: string
    icon: string
}

export const WorksState: WorkStateType[] = [
    {
        title: "TodoList",
        subtitle: "Development of a web application for task management, built on React and Redux technologies. The project provides users with a convenient and intuitive interface for creating, tracking, and managing tasks in everyday life.",
        icon: work1Image
    },
    {
        title: "Flash Cards",
        subtitle: "This web application project focuses on individualized learning through flashcards while leveraging a team-oriented development approach. The application, crafted with RTK Query  collaborative team setting.",
        icon: work1Image
    },
    {
        title: "Portfolio",
        subtitle: "Developed using React, this Single Page Application (SPA) is designed to efficiently present information in a straightforward manner.",
        icon: work1Image
    },
]