import { dataSkills } from "./dataSkills";

export const Skills = () => {

    const style = 'd-inline-flex m-1 skill animate__animated animate__pulse animate__infinite infinite'

    return (
        <div className='text-center lightColor'>
            {
                dataSkills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={` ${style} ${skill.style}`}
                    > {skill.text}
                    </div>
                ))
            }
        </div>
    )
}
