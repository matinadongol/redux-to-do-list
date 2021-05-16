import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToDo, deleteToDo, removeToDo} from "../actions/index";
import './ToDo.css';

const ToDo = () => {
    const[inputData, setInputData] = useState('');

    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figcaption>
                        Add your list here 
                        <button className="btn effect04" /*data-sm-link-text="Remove All"*/ onClick={() => dispatch(removeToDo())}><span>Remove All</span></button>
                    </figcaption>
                    <div className="additems">
                        <input type="text" placeholder=" Add Items ..." value={inputData} onChange={(event) => setInputData(event.target.value)}/>
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addToDo(inputData), setInputData('')) }></i>
                    </div>
                    <div className="showitems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachitem" key={elem.id}>
                                        <div className="grid1">
                                            <h5>{elem.data}</h5>
                                        </div>
                                        <div className="grid2">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteToDo(elem.id), setInputData(''))}></i>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo
