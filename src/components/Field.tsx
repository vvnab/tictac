import React, { useState } from 'react';
import _ from "lodash";
import './App.scss';
import Cell from './Cell';

interface FieldProps {
    size?: number
}

const TIC = '✘';
const TAC = '⭕';


const Field = ({ size = 3 }: FieldProps) => {
    const initial: string[][] = new Array(size); 
    for (let i = 0; i < size; i++) {
        initial[i] = new Array(size);
        initial[i].fill('');
    };
    const [state, setState] = useState(initial);

    const changeState = (x: number, y: number) => {
        state[x][y] = state[x][y] === TIC ? TAC : TIC;
        setState([...state]);
    }

    return <div className="field">
        {state.map((row, x) => <div key={x} className='row'>{
            row.map((cell, y) => <Cell key={y} state={cell} changeState={() => changeState(x, y)} />)
        }</div>)}
    </div>
}

export default Field;