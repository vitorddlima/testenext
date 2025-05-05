import link from "next/link"

interface ManuProps{
    op1: string;
    op2: string;
    op3: string;
    op4: string;
}

export const Menu: React.FC = () => {
    return(
        <header>
            <nav>
            <link className="from-black" href={"/"}>{op1}</link>
            <link className="from-black" href={"/hookPage"}>{op2}</link>

            </nav>
        </header>
        
    )
}