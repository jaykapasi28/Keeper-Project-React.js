import React, {useState} from "react";
import Heading from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea";

function App() {
    const [addData, setAddData] = useState([]);

    function handelClick(data1) {
        setAddData((prevVal) => {
            return [...prevVal, data1]
        })
    }

    function removeItem(id) {
        setAddData(prevVal => {
            return(
                prevVal.filter((item, index) => {
                    return index !== id
                })
            )
        })
    }

    return(
        <div>
            <Heading />
            <CreateArea 
            addItem = {handelClick}
            />
            {addData.map((con,ind) => {
                return(
                    <Note
                    key= {ind}
                    id= {ind}
                    title = {con.title}
                    content = {con.content}
                    onClickDelete = {removeItem}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default App;