import { useState } from "react"

const AddTodo = () => {
    // variable to get user input
    const [input, setInput] = useState("");
    //a list to store todo list
    const [list, setList] = useState([]);
    // variable to check the state o checkbox
    const [check, setCheck] = useState(false);
    // function to add input todo to list
    const addlist = (e) => {
        if (input === "") {
            console.log('enter a todo')
        }
        else{
            let todo = input;
            e.preventDefault();
            // creating a json object and adding inputed todo as value
            const newTodo = {
                id: Math.random(), //giving each object a specific random id
                todos: todo
            };
    
            //adding newtodo json object to list
            setList([...list, newTodo]);
            //setting input field to empty after button is clicked
            setInput("");
        }
    }
    //function to remove todo
    const removeTodo = (id) => {
        // using filter to edit list of todo
        let newtodolist = list.filter((item) => item.id !== id);
        //updating new list after filter
        setList(newtodolist);
    }
    return (
        <section className="container d-flex justify-content-center">
            <div className="m-5 bg-light shadow p-3 mb-5 bg-body rounded">
                <div className="">
                    <h2 className="bg-info text-light fw-bold text-center">Todo List</h2>
                    <div className="d-flex justify-content-between mt-4 inputContain btn-sm">
                        <input 
                            type="text"
                            required
                            placeholder="add a new task"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className=""
                        />
                        <button onClick={addlist} className="text-light btn-info">Add Todo</button>
                    </div>
                </div>
                <p className="">{input}</p>
                <div className="todoDisp">
                    <ul>
                        {list.map((item) => (
                            <li key={item.id} className="d-flex justify-content-between w-75">
                                <div className="d-flex">
                                    <input 
                                    type="checkbox" 
                                    checked={check}
                                    onChange={(e) => setCheck(e.target.checked)}
                                    className="checkbox"
                                    />
                                    {!check && <p>{item.todos}</p>}
                                    {check && <p className="checked">{item.todos}</p>}
                                </div>
                                <p onClick={() => removeTodo(item.id)} className="bg-danger rounded-circle text-light cancel">x</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default AddTodo;