import { Button, FormControl, Stack, TextField } from "@mui/material";
import { PageTitle } from "../../components";

interface FormProps {
    username: string;
    times: number;
}

export default function UserForm({ username, times }: FormProps) {
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
                <TextField id="installments" label="Parcelas" variant="outlined" />
                <Button variant="contained" color="secondary">Pagar</Button>
            </Stack>
        </FormControl>
        </>
    )
}