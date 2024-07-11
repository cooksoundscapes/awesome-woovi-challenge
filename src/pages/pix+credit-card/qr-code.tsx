import { Button, styled } from "@mui/material";
import toCurrency from "../../utils/currency";
import { FileCopy } from "@mui/icons-material";
import qrImg from '../../assets/pudim.png'
import { PageTitle } from "../../components";

interface QRCodeProps {
    username: string;
    cost: number;
    onClick: () => void;
}

const QRImage = styled('img')(({ theme }) => ({
    width: 220,
    height: 'auto',
    borderRadius: 8,
    border: `1px solid ${   theme.palette.primary.main}`,
}))

export default function QRCode({ username, cost, onClick }: QRCodeProps) {
    return(
        <>
            <PageTitle>{`${username}, pague a entrada de ${toCurrency(cost)}`}</PageTitle>
            <QRImage src={qrImg} />
            <Button variant="contained" color="secondary" onClick={onClick} endIcon={<FileCopy />}>
                Clique para copiar QR CODE
            </Button>
        </>
    )
}