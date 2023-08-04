import { dataSkills } from "./dataSkills";

export const Skills = () => {

    return (
        <div className='text-center lightColor'>
            {
                dataSkills.map((skill, index) => (
                    <span 
                        key={index} 
                        className={`skill-hover ${skill.font}`}
                    > {skill.text}
                    </span>
                ))
            }
        </div>
    )
}
