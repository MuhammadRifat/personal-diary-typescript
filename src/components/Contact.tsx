import React from 'react';

interface IProps{
    name: string,
    age: number,
}

const Contact = (props: IProps) => {
    return (
        <div className="contact">
            <strong>N0ame:</strong> { props.name }<br/>
            <strong>Age:</strong> { props.age }
        </div>
    );
};

export default Contact;