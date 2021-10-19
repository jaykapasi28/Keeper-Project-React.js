import React, { useState } from "react";

function CreateArea(props) {
    const [data, setData] = useState({
        title: "",
        content: ""
    });
   const [isExpanded, setExpanded] = useState(false)

    function handelChange(event) {
        const {name, value} = event.target;
        setData((prevVal) => {

            return {...prevVal, [name] : value}

        });
    }

    function clicked(event) {
        props.addItem(data);
        setData({
            title: "",
            content: ""
        });
        event.preventDefault();
    }  

    function expand() {
        setExpanded(true);
    }

    return(
        <div>
            <form>
                <input onClick={expand} onChange={handelChange} name="title" type="text" placeholder="Title" value={data.title} />
                {isExpanded === true ? <textarea onChange={handelChange} name="content" rows= {isExpanded === true ? 3 : 1} placeholder= "Take a note.." value={data.content}></textarea> : null}
                {isExpanded === true && <button onClick= {clicked}>Add</button>}
            </form>
        </div>

    )
}

export default CreateArea