import React from 'react'

const InputField = ({ type, placeholder, label, value, onChange }) => {
    return (
        <div>
            <label>
                <p className='label'>{label}</p>
                <br />
                <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            </label>
        </div>
    )
}

export default InputField