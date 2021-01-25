import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['Shingeki No Kyojin'])
   
    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setcategories={setcategories}/>
            <hr/>


            <ol>   
                {
                    categories.map((cat) => 
                        <GifGrid 
                            key={cat}
                            category={cat}
                        />
                    )
                }
            </ol> 
        </>
    )
}
export default GifExpertApp;
