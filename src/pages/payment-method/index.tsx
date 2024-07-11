import { Badge, Stack } from '@mui/material'
import usePaymentData from '../../context/consumer'
import { useCallback, useMemo } from 'react'
import { styled } from '@mui/material/styles'
import InstallmentCard from './installment'
import { useNavigate } from 'react-router-dom'
import { PageTitle } from '../../components'

export default function PaymentMethod() {
    const { username, paymentMethods, selectedMethod, setSelectedMethod } = usePaymentData()
    const navigate = useNavigate()

    const selectInstallment = useCallback((methodId: number, id: number) => {
        setSelectedMethod?.({ method: methodId, installment: id })
        setTimeout(() => navigate('/pix+credit-card'), 500)
    }, [navigate, setSelectedMethod])

    const methods = useMemo(() => paymentMethods.map(method => (
        <Stack sx={{ position: 'relative' }} key={method.id}>
            <HoverBadge>
                {method.name}
            </HoverBadge>
            {method.installments.map(inst => (
                <InstallmentCard
                    key={inst.id}
                    {...inst}
                    onClick={() => selectInstallment(method.id, inst.id)}
                    isChecked={selectedMethod?.method === method.id && selectedMethod?.installment === inst.id}
                />
            ))}
        </Stack>
    )), [paymentMethods, selectInstallment, selectedMethod?.installment, selectedMethod?.method])

    return (
        <Stack spacing={2} sx={{
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <PageTitle>{`${username}, como você quer pagar?`}</PageTitle>
            <Stack sx={{ width: '100%' }} spacing={4}>
                {methods}
            </Stack>
        </Stack>
    )
}

const HoverBadge = styled(Badge)(({ theme }) => ({
    position: 'absolute',
    top: '-1em',
    left: '0.75em',
    zIndex: 2,
    backgroundColor: theme.palette.grey[200],
    borderRadius: 100,
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingTop: '0.15em',
    paddingBottom: '0.15em',
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.palette.grey[800]
}))