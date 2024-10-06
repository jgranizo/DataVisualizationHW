import React, {Component} from 'react';

class Skills extends Component{

render(){
    return (
        <div>
            <div className='Section-Name'>
                <h3>{this.props.sectionSkillsName}</h3>
            
            <div className='Skills'>
                <div className='Skill1'>
                    <p>{this.props.sectionSkillsKey1}</p>
                    <p>{this.props.sectionSkillsKey2}</p>
                    <p>{this.props.sectionSkillsKey3}</p>
                </div>
                <div className = 'Skill2'>
                <p>{this.props.sectionSkillsKey4}</p>
                <p>{this.props.sectionSkillsKey5}</p>
                <p>{this.props.sectionSkillsKey6}</p>
                </div>
                <div className='Skill3'>
                <p>{this.props.sectionSkillsKey7}</p>
                <p>{this.props.sectionSkillsKey8}</p>
                <p>{this.props.sectionSkillsKey9}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
}
export default Skills