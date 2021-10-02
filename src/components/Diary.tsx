import React from 'react';

interface IProps{
    id: number,
    title: string,
    description: string,
    handleDelete : (id: number) => void
}

const Diary = (props: IProps) => {
    return (
        <div className="diary">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button className="btn" onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
    );
};

export default Diary;