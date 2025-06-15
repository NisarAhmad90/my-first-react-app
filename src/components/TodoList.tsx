import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) =>void;
  }
export function ListGroup (props: Props) {


  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    
    const handleClick = (index: number) => {
    setSelectedIndex(index);
    
  };

    
    return (

        <div>
            <h1>{props.heading}</h1>
            <ul className="list-group mb-4">

                {props.items.map((item, index) => (
                    <li className= {selectedIndex===index ? "list-group-item active":"list-group-item"} key={index} 
                    onClick={  () =>
                        {
                            handleClick(index);
                            props.onSelectItem(item);
   
                    } }>   {item} </li>
                ))


                 }
                
               
            </ul>

            
           <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add to do item" />
                <button className="btn btn-primary" type="button">Add</button>
            </div>
        </div>
   
    )

}