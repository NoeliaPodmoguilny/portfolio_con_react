import { dataSkills } from "./dataSkills";

export const Skills = () => {

    const style = 'd-inline-flex m-1 skill'

    return (
        <div className='text-center lightColor animate__animated animate__fadeIn'>
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
