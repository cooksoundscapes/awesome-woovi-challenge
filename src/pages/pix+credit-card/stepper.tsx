import { Stack, Step, StepLabel, Stepper, Typography } from "@mui/material"
import toCurrency from "../../utils/currency"

interface PaymentStepper {
    times: number;
    cost: number;
    activeStep: number;
}

export default function PaymentStepper({ times, cost, activeStep }: PaymentStepper) {
    const steps = []
    for (let i = 0; i < times; i++) {
        const description = i === 0 ? 'entrada no Pix' : 'no cartão'
        steps.push(`${i+1}º ${description}`)
    }
    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map(label => (
                <Step key={label}>
                    <StepLabel>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>{label}</Typography>
                            <Typography><b>{toCurrency(cost)}</b></Typography>
                        </Stack>
                        
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}