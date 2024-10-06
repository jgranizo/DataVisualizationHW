import React, {Component} from 'react';
class Education extends Component{
    render(){
        return (
            <div>
                <div className='Section-Education'>
                    <h3>{this.props.sectionEducationName}</h3>
               <div className='Education'>
                <div className='college1'>
                    <h3>{this.props.sectionEducationCollege1}</h3>
                    <p>{this.props.sectionEducationDegree1}</p>
                    <p>{this.props.sectionEducationYear1}</p>
                    <p>{this.props.sectionEducationGpa1}</p>
                </div>
                <div className='college2'>
                    <h3>{this.props.sectionEducationCollege2}</h3>
                    <p>{this.props.sectionEducationDegree2}</p>
                    <p>{this.props.sectionEducationYear2}</p>
                    <p>{this.props.sectionEducationGpa2}</p>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Education