import React, {useEffect, useRef, useState} from "react";

const UsePrev: React.FC<any> = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);

    const prevCount: any = usePrevious(count);

    return (
        <>
            <h1>Now: {count}, before: {prevCount}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}
export default UsePrev;

const usePrevious: React.FC<any> = (value: any): any => {

    const ref: any = useRef();


    useEffect(() => {
        ref.current = value;
    }, [value]);


    return ref.current;
}
