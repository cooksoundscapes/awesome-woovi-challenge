import { ReactNode, createContext, useState, } from "react";
import { PaymentData, getPaymentData } from "../api-mock/api";

type SelectedMethod = {
    method: number;
    installment: number
}

export interface PaymentState extends PaymentData {
    selectedMethod?: SelectedMethod;
    setSelectedMethod?: (sel: SelectedMethod) => void;
}

const paymentData = getPaymentData()
export const PaymentContext = createContext<PaymentState>({
    ...paymentData,
    selectedMethod: { method: 0, installment: 0 }
})

export default function PaymentProvider({ children }: { children: ReactNode }) {
    const [selectedMethod, setSelectedMethod] = useState<SelectedMethod>({ method: 1, installment: 1 })

    return (
        <PaymentContext.Provider value={{ ...paymentData, selectedMethod, setSelectedMethod }}>
            {children}
        </PaymentContext.Provider>
    )
}