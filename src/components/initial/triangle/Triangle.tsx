import { TriangleF, TriangleContainer } from "./style";
import theme from "../../../theme";

interface Props {
    type: 'top' | 'bottom',
    color?: string,
}

export default function Triangle({ type, color }: Props) {
    return (
        <>
            <TriangleContainer type={type} color={color ?? theme.primaryColor} />
            <TriangleF type={type} color={color ?? theme.primaryColor} />
        </>
    );
}