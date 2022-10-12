import Card from "./Card";
import "./Main.css";
import data from "../../data";

const Main=()=>{
    return(
        <div className="card-container">
          {data.map((item,index)=> <Card {...item} key={index} />)}
        </div>
    )
}

export default Main;