import React, {Component} from 'react';

class WorkExperience extends Component{

    render(){
        return (<div>
            <div className='Section-Name'>
                <div>
                    <h3>{this.props.sectionWorkExperienceName}</h3>
                </div>
                <div className='jobs'>
                <div className = 'Job-Title1'>
                    <h4>{this.props.sectionWorkExperienceJob1}</h4>
                    <div className='Job-Description1'>
                        <p>{this.props.sectionWorkExperienceDescription1}</p>

                    </div>

                </div>
                <div className='Job-Title2'>
                    <h4>{this.props.sectionWorkExperienceJob2}</h4>
                    <div className='Job-Description2'>
                        <p>{this.props.sectionWorkExperienceDescription2}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default WorkExperience