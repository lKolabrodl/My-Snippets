import { useState, useEffect } from 'react';

function App() {

    const happyPress: boolean = useKeyPress("h");
    const sadPress: boolean = useKeyPress("s");
    const robotPress: boolean = useKeyPress("r");
    const foxPress: boolean = useKeyPress("f");
    return (
        <div>
            <div>h, s, r, f</div>
            <div>
                {happyPress && "😊"}
                {sadPress && "😢"}
                {robotPress && "🤖"}
                {foxPress && "🦊"}
            </div>
        </div>
    );
}
// Hook
function useKeyPress(targetKey: string): boolean {

    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }): void {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }): void => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);
    return keyPressed;
}
