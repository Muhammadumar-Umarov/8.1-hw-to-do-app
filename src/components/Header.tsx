import { useState, type FormEvent } from "react"

const Header = () => {
    const [data, setData] = useState<any>([])

    const [title, setTitle] = useState<string>("Title")
    const [text, setText] = useState<string>("Text")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setData({ title, text });
        (e.target as HTMLFormElement).reset()
    }
    const handleDelete = () => {
        setData({ title: "", text: "" })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input required onChange={(e) => setTitle(e.target.value === " " ? e.target.value.trim() : e.target.value)} type="text" placeholder="title" />
                <input required onChange={(e) => setText(e.target.value)} type="text" placeholder="text" />
                <button>Create</button>
            </form>
            
            {data && (
                <>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Header