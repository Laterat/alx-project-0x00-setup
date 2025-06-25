

import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC= ()=>{
    return(
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            
            <Card />
            <Card />
             <br/>
        <h2 className="text-xl font-semibold mb-3">Small Buttons</h2> 
          <div className="ml-4 flex flex-wrap gap-4">
            <Button title="Small - rounded-sm" styles="text-sm rounded-sm" />
            <Button title="Small - rounded-md" styles="text-sm rounded-md" />
             <Button title="Small - rounded-full" styles="text-sm rounded-lg" />
        </div>

        <h2 className="text-xl font-semibold mb-3">Medium Buttons</h2>
        <div className="ml-4 flex flex-wrap gap-4">
          <Button title="Medium - rounded-sm" styles="text-base rounded-sm" />
          <Button title="Medium - rounded-md" styles="text-base rounded-md" />
          <Button title="Medium - rounded-full" styles="text-base rounded-full" />
        </div>

        <h2 className="text-xl font-semibold mb-3">Large Buttons</h2>
        <div className="ml-4 flex flex-wrap gap-4">
          <Button title="Large - rounded-sm" styles="text-lg rounded-sm" />
          <Button title="Large - rounded-md" styles="text-lg rounded-md" />
          <Button title="Large - rounded-full" styles="text-lg rounded-full" />
        </div>
        </div>
    );
}

export default Landing;