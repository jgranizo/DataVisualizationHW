import React, {Component} from 'react';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import "./App2.css"
class App2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            sectionHeader:{name:"Jeremy Granizo",jobTitle:"Data Scientist",Email:"abc@gmail.com",Web:"abc.github.io/abc",Mobile:"01234567890"},
            sectionProfile:{SectionName:"Personal Profile",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."},
            sectionWork:{SectionName:"Work Experience",JobTitle1:"Job Title at Company (August 2022 – December 2023)",JobTitle2:"Job Title 2 at Company 2 (August 2020 – December 2021)",description1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat"
                ,description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat"
            },
            sectionSkills:{sectionName:"Key Skills",keySkill_1:"A Key Skill",keySkill_2:"A Key Skill",keySkill_3:"A Key Skill",keySkill_4:"A Key Skill",keySkill_5:"A Key Skill",keySkill_6:"A Key Skill",keySkill_7:"A Key Skill",keySkill_8:"A Key Skill",keySkill_9:"A Key Skill"},
            sectionEducation:{sectionName:"Education",collegeName1:"New Jersey Institute of Technology",degree1:"BS in Computer Science",year1:"2018-2022",gpa1:"3.9",collegeName2:"New Jersey Institute of Technology",degree2:"MS in Data Science",year2:"2022-2023",gpa2:"4.0"}
        }
    }//have all data in constructor state, then drop seperatly into props for
    //each component

    //deconstruct object into const and then use?
    
    render(){
        return (
            <div>
                <Header sectionHeaderName={this.state.sectionHeader.name} sectionHeaderJobTitle = {this.state.sectionHeader.jobTitle} sectionHeaderEmail = {this.state.sectionHeader.Email}
                sectionHeaderWeb = {this.state.sectionHeader.Web} sectionHeaderMobile = {this.state.sectionHeader.Mobile}></Header>
               <PersonalProfile sectionProfileName = {this.state.sectionProfile.SectionName} sectionProfileDescription = {this.state.sectionProfile.description}></PersonalProfile>
                <WorkExperience sectionWorkExperienceName = {this.state.sectionWork.SectionName}
                sectionWorkExperienceJob1={this.state.sectionWork.JobTitle1} sectionWorkExperienceJob2 = {this.state.sectionWork.JobTitle2}
                sectionWorkExperienceDescription1 = {this.state.sectionWork.description1} sectionWorkExperienceDescription2 = {this.state.sectionWork.description2}
                ></WorkExperience>
                <Skills sectionSkillsName={this.state.sectionSkills.sectionName}    sectionSkillsKey1={this.state.sectionSkills.keySkill_1}
                sectionSkillsKey2={this.state.sectionSkills.keySkill_2}
                sectionSkillsKey3={this.state.sectionSkills.keySkill_3}
                sectionSkillsKey4={this.state.sectionSkills.keySkill_4}
                sectionSkillsKey5={this.state.sectionSkills.keySkill_5}
                sectionSkillsKey6={this.state.sectionSkills.keySkill_6}
                sectionSkillsKey7={this.state.sectionSkills.keySkill_7}
                sectionSkillsKey8={this.state.sectionSkills.keySkill_8}
                sectionSkillsKey9={this.state.sectionSkills.keySkill_9}></Skills>
                <Education sectionEducationName = {this.state.sectionEducation.sectionName}
                sectionEducationCollege1 = {this.state.sectionEducation.collegeName1}
                sectionEducationCollege2 = {this.state.sectionEducation.collegeName2}
                sectionEducationDegree1 ={this.state.sectionEducation.degree1} 
                sectionEducationDegree2 ={this.state.sectionEducation.degree2}         
                sectionEducationYear1 = {this.state.sectionEducation.year1}
                sectionEducationYear2 = {this.state.sectionEducation.year2}
                sectionEducationGpa1 = {this.state.sectionEducation.gpa1}
                sectionEducationGpa2 = {this.state.sectionEducation.gpa2}

                >   </Education> 
                </div> 
        );
    }
}
export default App2