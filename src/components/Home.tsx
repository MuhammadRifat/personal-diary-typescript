import React, { useState } from 'react';
import Diary from './Diary';
import './Home.css';

interface IDiary{
    id: number,
    title: string,
    description: string,
}

const Home = () => {
    const [diaries, setDiaries] = useState<IDiary[]>([]);
    const [diary, setDiary] = useState<IDiary>({} as IDiary);

    // submit diary
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let id = Number(Math.random()*10000);
        const newDiaries = [...diaries, {...diary, id: id}];
        setDiaries(newDiaries);
    }

    // get input value
    const handleBlur = (e: (React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>)) => {
        const newDiary = {...diary, [e.target.name]: e.target.value};
        setDiary(newDiary);
    }

    // handle delete button
    const handleDelete = (id: number) => {
        const newDiaries = diaries.filter(diary => diary.id !== id);
        setDiaries(newDiaries);
    }
    return (
        <section className="main">
            <div style={{ width: '70%' }}>
                {
                    diaries.map((diary) => <Diary title={diary.title} description={diary.description} id={diary.id} handleDelete={handleDelete} key={diary.id} />)
                }
            </div>
            <div style={{ width: '25%' }}>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name="title" id="title" placeholder="Title" required />
                    <textarea onBlur={handleBlur} name="description" id="description" cols={30} rows={10} placeholder="Description" required></textarea>
                    <button type="submit" className="btn">Add</button>
                    <button type="reset" className="btn" style={{marginTop: '10px'}}>Refresh</button>
                </form>
            </div>
        </section>
    );
};

export default Home;