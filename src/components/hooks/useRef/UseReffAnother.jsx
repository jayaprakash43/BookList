import React,{useEffect,useRef,useState} from 'react'

const UseRefExampple = () => {
    const [firstValue, setFirstValue] = useState(0);
    const refContainer = useRef(null)
    const isMounted = useRef(false)

    const submitButton = (e)=>{
        e.preventDefault()
        console.log(refContainer.current);
        const name = refContainer.current.value;
        console.log(name);
    }
    useEffect(()=>{
        refContainer.current.focus()
        console.log('UseEffect 1');
    });
    useEffect(()=>{
        if(!isMounted.current){
            isMounted.current = true
            return
        }
        console.log('UseEffect rendering');
    },[firstValue])

  return (
    <div>
      <form className='form' onSubmit={submitButton}>
        <div className=''>
            <label htmlFor="namme" className='form_label'>Name : </label>
            <input type="text" id='name' className='form_input' ref={refContainer}/>
        </div>
        <br />
        <button type='text' className='btn' >Sumbit</button>
      </form>
      <h1>value {firstValue} </h1>
      <button onClick={()=>{setFirstValue(firstValue+1)}} className='btn' >Increase</button>
    </div>
  )
}

export default UseRefExampple
