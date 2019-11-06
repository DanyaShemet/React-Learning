import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component{
    
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status  
            })
        }
        
        console.log('pdate');     
    }

    activateEditMode = () =>{
        this.setState({editMode: true}) 
    }
    deactivateEditMode = () =>{
        this.setState({editMode: false}) 
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render(){
        return(
            <div>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status} />
                    </div>
                }
            </div> 
        )
    } 
}

export default ProfileStatus;