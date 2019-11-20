import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'




const ProfileStatusHooks = (props) =>{

    let [editMode, setEditMode] = useState(false)
    let [status, updateUserStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () =>{
        setEditMode(false);
        updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        updateUserStatus(e.currentTarget.value)
    }
 
    return(
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{status || "-----"}</span>
                </div>
            }
            {editMode && 
                <div>
                    <input autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode}  />
                </div>
            }
        </div> 
    )
 
}

export default ProfileStatusHooks;