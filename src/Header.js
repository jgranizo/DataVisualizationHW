import React, {Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div className='hd1'>
                <div className='hd1_c1'>
                    <div>
                        <h2>{this.props.sectionHeaderName}</h2>
                        <h3>{this.props.sectionHeaderJobTitle}</h3>
                    </div>
                </div>
                <div className='hd1_c2'>
                    <div>
                    <p>Email: {this.props.sectionHeaderEmail}</p>
                    <p>Web: {this.props.sectionHeaderWeb}</p>
                    <p>Mobile: {this.props.sectionHeaderMobile}</p>
                </div>
                </div>
            </div>
        );
    }
}
export default Header