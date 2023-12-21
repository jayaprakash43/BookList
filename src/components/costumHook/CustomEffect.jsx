import {useEffect,useState} from 'react'

const CustomEffect = () => {
    const [load,setlaoding] = useState([])
    const [loading ,usesetloading] = useState(true)
    
   useEffect(()=>{
    const myFunction = async ()=>{
        const apiUrl = await fetch('https://api.github.com/users/QuincyLarson')
        await apiUrl.json()

        .then(function(response){
            console.log(response);
            setlaoding(response)
        })
        // .then(function(results){
        //     console.log(results);
        // })
    }
    myFunction()
   },[])
   

  return ({ load ,setlaoding})
}

export default CustomEffect
