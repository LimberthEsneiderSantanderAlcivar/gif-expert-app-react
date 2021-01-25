import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['One Punch', 'Naruto', 'Shingeki No Kyojin'])

/*     const handleAdd = (e)=>{
        setcategories([...categories, 'Dr Stone']);
    } */
    
    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setcategories={setcategories}/>
            <hr/>


            <ol>   
                {
                    categories.map((cat) =>{
                        return <li key={cat}>{cat}</li>
                    })
                }
            </ol> 
        </>
    )
}
export default GifExpertApp;
