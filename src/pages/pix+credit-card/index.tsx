import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Stack, Typography } from "@mui/material";
import usePaymentData from '../../context/consumer'
import toCurrency from "../../utils/currency";
import { useMemo, useState } from "react";
import { ArrowDownward } from "@mui/icons-material";
import QRCode from "./qr-code";
import UserForm from "./form";
import formatDate from "../../utils/date-format";
import PaymentStepper from "./stepper";

export default function PixAndCreditCard() {
    const { username, paymentMethods, selectedMethod, identifier, expirationDate } = usePaymentData()
    const [qrCodeIsDone, setQrCodeIsDone] = useState(false)

    const selectedInfo = useMemo(
        () => {
            if (!selectedMethod) return;
            return paymentMethods
                .find(m => m.id === selectedMethod.method)
                ?.installments
                ?.find(i => i.id === selectedMethod.installment)
        },
        [paymentMethods, selectedMethod]
    )

    const total = useMemo(() => selectedInfo ? selectedInfo.cost * selectedInfo.times : 0, [selectedInfo])

    return (
        <Stack spacing={2} alignItems="center">
            {!qrCodeIsDone ? 
                <QRCode 
                    username={username}
                    cost={selectedInfo?.cost || 0}
                    onClick={() => setQrCodeIsDone(true)}
                />
            :
            <UserForm
                username={username}
                times={selectedInfo? selectedInfo.times - 1 : 0}
            />}
            <Box sx={{ textAlign: 'center' }}>
                <Typography component="p" variant="caption">Prazo de pagamento:</Typography>
                <Typography component="p"><b>{formatDate(expirationDate)}</b></Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <PaymentStepper
                    times={selectedInfo?.times || 0}
                    cost={selectedInfo?.cost || 0}
                    activeStep={qrCodeIsDone ? 1 : 0}
                />
            </Box>
            <Divider sx={{ width: '100%' }} />
            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                <Typography>CET 0.5%</Typography>
                <Typography>{`Total: ${toCurrency(total)}`}</Typography>
            </Stack>
            <Divider sx={{ width: '100%' }} />
            <Accordion sx={{ boxShadow: 'unset', "::before": { content: 'unset' } }}>
                <AccordionSummary
                    expandIcon={<ArrowDownward />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Como funciona?
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider sx={{ width: '100%' }} />
            <Box sx={{ textAlign: 'center' }}>
                <Typography component="p" variant="caption">Identificador:</Typography>
                <Typography component="p"><b>{identifier}</b></Typography>
            </Box>
        </Stack>
    )
}