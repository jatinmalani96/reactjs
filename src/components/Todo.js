import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState(["Jatin"])
    const [updataIndex, setIndex] = useState(null)
    const addData = () => {
        var input = document.getElementById("input").value

        if (input !== "") {
            if (updataIndex == null) {
                setTodo((old) => [...old, input])
            }
            else {
                // alert(updataIndex)
                let data = [...todo]
                data[updataIndex] = input
                setTodo(data)
            }

            document.getElementById("input").value = ""
        }
        else {
            alert("Please enter Data!!!!")
        }


    }
    const deleteData = (id) => {
        // console.log(id);
        let data = todo.filter((re, index) => {
            return id != index
        })
        setTodo(data)
    }

    const editData = (res, index) => {
        // alert(re+" or"+ index)
        document.getElementById("input").value = res
        setIndex(index)
    }
    return (
        <>
            {/* <h1>{todo}</h1> */}
            <input type="text" id="input" />
            <button onClick={() => {
                addData()
            }}>Add data</button>
            {todo.map((result, id) => {
                return (
                    <>
                        <h1>{result}</h1>
                        <button onClick={() => {
                            deleteData(id)
                        }}>Delete</button>
                        <button onClick={() => {
                            editData(result, id)
                        }}>Updata</button>
                    </>
                )
            })}
        </>
    )
}

export default Todo
