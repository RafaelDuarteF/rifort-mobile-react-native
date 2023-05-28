import { TriangleF, TriangleContainer } from "./style";

interface Props {
    type: 'top' | 'bottom',
}

export default function Triangle({type} : Props) {
    return(
        <>
            <TriangleContainer type={type}/>
            <TriangleF type={type}/>
        </>
    );
}