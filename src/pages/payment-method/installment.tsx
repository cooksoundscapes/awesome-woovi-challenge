import { Stack, Box, Typography, Radio, styled } from "@mui/material";
import { Installment } from "../../api-mock/api";
import toCurrency from "../../utils/currency";
import { Caption } from "../../components";

export default function InstallmentCard({
    times,
    cost,
    cashbackPercent,
    immediateMoneyReturn,
    feeDiscountPercentage,
    isChecked,
    onClick,
}: Installment & { isChecked: boolean, onClick: () => void }) {
    return (
        <InstallmentContainer
            onClick={onClick}
            selected={isChecked}
        >
            <Stack direction="row" justifyContent="space-between">
                <Box>
                    <Typography component="p"><b>{`${times}x `}</b>{`${toCurrency(cost)}`}</Typography>
                    {times > 1 ?
                        <Caption>{`Total: ${toCurrency(cost * times)}`}</Caption>
                    : null}
                    {cashbackPercent ?
                        <Typography 
                            component="p"
                            variant="caption"
                            sx={(theme) => ({color: theme.palette.primary.main, fontWeight: 600 })}
                        >Ganhe<b>{` ${cashbackPercent}% `}</b>de Cashback</Typography>
                    : null}
                </Box>
                <Radio
                    checked={isChecked}
                />
            </Stack>
            {immediateMoneyReturn ?
            <OfferFlag>
                <Typography variant='caption'>
                    <b>{`🤑 ${toCurrency(immediateMoneyReturn)} `}</b>de volta no seu Pix na hora
                </Typography>
            </OfferFlag>
            : null}
            {feeDiscountPercentage ?
            <OfferFlag>
                <Typography variant='caption'>
                    <b>{`-${feeDiscountPercentage}% de juros: `}</b>Melhor opção de parcelamento
                </Typography>
            </OfferFlag>
            : null}
        </InstallmentContainer>
    )
}

const InstallmentContainer = styled(
    Box,
    { shouldForwardProp: prop => prop !== 'selected' }
)<{ selected: boolean }>(({ theme, selected }) => ({
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '0.75em',
    paddingBottom: '0.75em',
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: selected ? theme.palette.primary.main : theme.palette.grey[200],
    zIndex: selected ? 1 : undefined,
    cursor: 'pointer',
    backgroundColor: selected ? theme.palette.primary.light : undefined,
    ":first-of-type": {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    ":last-child": {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    ":not(:first-of-type)": {
        borderTopWidth: 1,
    },
    ":not(:last-child)": {
        borderBottomWidth: 1,
    }
}))

const OfferFlag = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    //display: 'inline-block',
    //maxWidth: '100%',
    right: 0,
    color: 'white',
    textWrap: 'nowrap',
    textOverflow: 'ellipsis',
    borderColor: 'transparent',
    borderRadius: 4,
    paddingLeft: '0.5em',
    paddingRight: '2em',
    position: 'relative',
    textAlign: 'left',
    overflow: 'hidden',
    "::after": {
        content: '""',
        position: 'absolute',
        width: 28,
        height: 28,
        borderRadius: 3,
        top: -2,
        right: -23,
        backgroundColor: 'white',
        transform: 'rotate(45deg)'
    }
}))