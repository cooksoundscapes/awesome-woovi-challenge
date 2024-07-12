import { Button, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { PageTitle } from "../../components";
import toCurrency from "../../utils/currency";
import usePaymentData from '../../context/consumer'
import { useMemo } from "react";

interface FormProps {
    username: string;
    times: number;
}

export default function UserForm({ username, times }: FormProps) {
    const { paymentMethods } = usePaymentData()

    const ccOptions = useMemo(
        () => paymentMethods.find(p => p.id === 2)?.installments,
        [paymentMethods]
    )

    return (
        <>
        <PageTitle>{`${username}, pague o restante em ${times}x no cartão`}</PageTitle>
        <FormControl>
            <Stack spacing={2}>
                <TextField id="fullname" label="Nome Completo" variant="outlined" />
                <TextField id="cpf" label="CPF" variant="outlined" />
                <TextField id="cardId" label="Número do Cartão" variant="outlined" />
                <Stack direction="row" spacing={2}>
                    <TextField id="expiration" label="Vencimento" variant="outlined" />
                    <TextField id="cvv" label="CVV" variant="outlined" />
                </Stack>
                <TextField select id="installments" label="Parcelas" variant="outlined">
                    {ccOptions ? ccOptions.map(opt => (
                        <MenuItem key={opt.id} value={opt.id}>
                            {`${opt.times}x de ${toCurrency(opt.cost)}`}
                        </MenuItem>
                    )) : null}
                </TextField>
                <Button variant="contained" color="secondary">Pagar</Button>
            </Stack>
        </FormControl>
        </>
    )
}