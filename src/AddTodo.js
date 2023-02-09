import { useState } from "react"

const AddTodo = () => {
    //let r = document.querySelector(':root');
    // variable to get user input
    const [input, setInput] = useState("");
    //a list to store todo list
    let [list, setList] = useState([]);
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
                todos: todo,
                done: false
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

    /*if (check) {
        let rs = getComputedStyle(r);
        console.log(rs.getPropertyValue('--checked'));
        r.style.setProperty('--checked', 'line-through');
    } else {
        r.style.setProperty('--checked', 'none');
    } */

    const isChecked = (id) => {
        setList(list.map((item) => (
            item.id === id ? {...item, done: !item.done} : item
        )))
    } 

    return (
        <section>
            <div className="top"></div>
            <h2 className="">Todo List</h2>
            <div className="container">
                <div className="">
                    <div className="inputContain">
                        <input 
                            type="text"
                            required
                            placeholder="add a new task"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-75"
                        />
                        <button onClick={addlist} className="">Add Todo</button>
                    </div>
                </div>
                <div className="todoDisp">
                    <ul>
                        {list.map((item) => (
                            <li key={item.id} className="">
                                <div className="">
                                    <input 
                                    type="checkbox" 
                                    checked={item.done}
                                    onChange={() => isChecked(item.id)}
                                    className="checkbox"
                                    />
                                    <p className={item.done ? 'checked' : ''}>{item.todos}</p>
                                </div>
                                <p onClick={() => removeTodo(item.id)} className="cancel">x</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default AddTodo;