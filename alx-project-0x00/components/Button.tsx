

import { ButtonProps } from "@/interfaces";

const Button : React.FC<ButtonProps>=({title, styles})=>{
    return(
         <button className={`  text-white bg-blue-500 px-4 py-2 hover:bg-blue-700 ${styles}`}>
            {title}
         </button>
    );
}


export default Button;