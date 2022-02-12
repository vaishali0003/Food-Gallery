import React, { useState } from 'react'

const App1 = () => {
    const [value1, setValue1] = useState([]);
    const [value, setValue] = useState({
        name:'',
        age:''
    });
    function func(e)
    {
        // setValue({...value,[e.target.name]:e.target.value});
        setValue((preVal)=>{
            return {...value,[e.target.name]:e.target.value};
        });
    }
    function func1(e)
    {
        // console.log(value);
        setValue1(value1.concat(value));
        
    }
    function func2()
    {
        console.log(value1);
    }
    function func3()
    {
        let n=1;
        let arr=[];
        for(let i=0;i<value1.length;i++)
        {
            if(i===n)
            {
                value1[i].name='hiten';
                value1[i].age='21';
            }
            arr.push(value1[i]);
        }
        setValue1(arr);
    }
    function func4()
    {
        setValue1.filter((e,index)=>{
            return index===1;
        })
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={value.name} onChange={func} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Age</label>
                <input type="text" className="form-control" name="age" value={value.age} onChange={func} />
            </div>
            <button onClick={func1} className="btn btn-success">Submit</button>
            <button onClick={func3} className="btn btn-info">Update</button>
            <button onClick={func4} className="btn btn-danger">Delete</button>
            <button onClick={func2} className="btn btn-warning">Show</button>
        </>
    )
}

export default App1;