import React from 'react';
import './App.scss';

interface FieldProps {
    state: string,
    changeState: Function
}


const Cell = ({ state, changeState }: FieldProps) => {
    return <div className="cell" onClick={() => changeState()}>
            {state || ''}
        </div>
}

export default Cell;