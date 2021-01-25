import { useState } from "react"

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Naruto', 'Shingeki No Kyojin'];

    const [categories, setcategories] = useState(['One Punch', 'Naruto', 'Shingeki No Kyojin'])

    const handleAdd = (e)=>{
        setcategories([...categories, 'Dr Stone']);
    }
    
    return (
        <>
            <h2>GifExpertApp</h2>  
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

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
