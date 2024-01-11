import React, {useState} from "react";

function Card({id,name,info,image,price,removeTour}){

    const [readMore , setReadMore] = useState(false);
    let description =  readMore ? info :`${info.substring(0,200)}....`
    function readMoreHandler(){
        setReadMore(!readMore)
    }
    return(
        <div className="Card w-96 h-auto shadow-md drop-shadow-2xl shadow-slate-950 p-3 rounded-md flex flex-col cursor-pointer" >
            <img src={image} className="h-3/6"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="text-green-600 font-bold text-xl pt-4">{price}</h4>
                    <h4 className="tour-name font-bold text-2xl">{name}</h4>
                </div>
            </div>
            <div className="description">
                {description}
                <span className="text-blue-500" onClick={readMoreHandler}>
                    {readMore ? `Show Less` : `Read More`}
                </span>

            </div>
            <button className="btn-red bg-orange-200 border-orange-600 border-2 px-2 py-1 rounded-xl text-center font-bold my-7 hover:bg-orange-500 hover:text-slate-100" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}
export default Card;