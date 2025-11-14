import { useState, useEffect, useRef } from 'react';

function HookDemo() {
    const [count, setCount] = useState(0);
    const testElement = useRef(null);

    useEffect(() => {
        // Update p element's background color based on count
        testElement.current?.style.setProperty('background-color', `rgb(${150 + count * 5}, 150, 150)`);
    }, [count]); // Only re-run the effect if count changes

    return (
        <div>
            <p ref={testElement}>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default HookDemo;
