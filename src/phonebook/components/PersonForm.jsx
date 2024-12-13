import React from 'react'

const PersonForm = ({ onSubmit, nameValue, onNameChange, numberValue, onNumberChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input 
                        value={nameValue} 
                        onChange={onNameChange} 
                        placeholder="Enter name (e.g. John Doe)"
                    />
            </div>
            <div>
                number: <input 
                          value={numberValue} 
                          onChange={onNumberChange} 
                          placeholder="Enter number (e.g XXX-XXX-XXXX)"
                          style={
                            { width: '220px' }
                          }
                    />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}

export default PersonForm;
