import { useState, type FormEvent } from "react"

const Header = () => {
    type IObject= {
        id: number,
        title: string,
        text: string,
    }
    const [data, setData] = useState<any>([])
    const [title, setTitle] = useState<string>("Title")
    const [text, setText] = useState<string>("Text")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const object: IObject = {
            id: new Date().getTime(),
            title,
            text
        }
        setData([...data, object]);
        console.log(object);
        (e.target as HTMLFormElement).reset()
    }

    const handleDelete = (id:number) => {
        setData(data.filter((i:any)=>i.id!== id))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input required onChange={(e) => setTitle(e.target.value === " " ? e.target.value.trim() : e.target.value)} type="text" placeholder="title" />
                <input required onChange={(e) => setText(e.target.value)} type="text" placeholder="text" />
                <button>Create</button>
            </form>
            {data?.map((i: any) => (
                <div key={i.id}>
                    <h2>{i.title}</h2>
                    <p>{i.text}</p>
                    <button onClick={()=>handleDelete(i.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Header