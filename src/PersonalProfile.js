import React, {Component} from 'react';

class PersonalProfile extends Component{

    render(){
        return (
            <div>
                <div className='Section-Name'>
                    <div>
                        <h3>{this.props.sectionProfileName}</h3>
                    </div>
                    <div className='Profile-Description'>
                        <div>
                            <p>{this.props.sectionProfileDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PersonalProfile