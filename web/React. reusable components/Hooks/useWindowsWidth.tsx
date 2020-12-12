// возвращает t/f , если размер экрана больше 600

import { useState, useEffect } from "react";

const useWindowsWidth = ():boolean => {
    const [isScreenSmall, setIsScreenSmall] = useState<boolean>(false);

    let checkScreenSize = ():void => {
        setIsScreenSmall(window.innerWidth <= 600);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isScreenSmall;
};

export default  useWindowsWidth;
