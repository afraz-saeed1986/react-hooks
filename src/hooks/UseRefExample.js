import {useRef, useEffect, useState} from 'react';

const UseRefExample = () => {

    const [name, setName] = useState("");
    // const [renderCount, setRenderCount] = useState(1);
    const renderCount = useRef(1);

    const inputRef = useRef(null);
    const prevState = useRef('');
    //NOTE useRef is very similar useState

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    useEffect(() => {
        console.log(inputRef.current);
        // inputRef.current.className = "bg-danger";
    }, []); // NOTE Dependency Array

    useEffect(()=>{
       prevState.current =name;     
    }, [name])

    const focusInput = () =>{
        inputRef.current.focus();
        // inputRef.current.placeholder = "سلام";
    };

    return (
        <>
        <div className="w-50 d-grid gap-2 mx-auto">
            <h5 className="alert alert-success text-center">
                آشنایی با هوک useRef
            </h5>
            <p>{`نام شما برار است با : ${name}`}</p>
            <p>{`نام قبلی شما برابر بود با : ${prevState.current}`}</p>
            <p>{`میزان رندرهای انجام شده تا به الان : ${renderCount.current}`}</p>
            <input 
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="نام ..."
              />
              <button type="button" onClick={focusInput} className="btn btn-primary btn-block mt-2">
                    تمرکز کن
              </button>
        </div>
        </>
    )
}

export default UseRefExample;