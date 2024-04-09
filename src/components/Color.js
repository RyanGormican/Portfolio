export const getColor = (tag)=>{
switch(tag) {
    case "CSS":
        return "success";
    case "Databases":
        return "cyan";
    case "Full-Stack Development":
        return "red";
    case "Firebase":
        return "volcano";
    case "HTML":
        return "magenta";
    case "JavaScript":
        return "orange";
    case "React.js":
        return "green";
    case "Web Development":
        return "gold";
    case "TypeScript":
        return "blue";
    case "Next.js":
        return "geekblue";
    case "Software Design Patterns":
        return "purple";
    case "Software Development":
        return "lime";
    case "Software Documentation":
        return "brown";
    case "Tailwind":
        return "cyan";
    case "User Interface Design":
        return "antiquewhite";
    case "Web Application Design":
        return "navajowhite";
    default:
        return "grey";
}

};