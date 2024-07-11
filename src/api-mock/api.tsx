export interface Installment {
    id: number;
    times: number;
    cost: number;
    cashbackPercent?: number;
    immediateMoneyReturn?: number;
    feeDiscountPercentage?: number;
    betterOption?: boolean;
}

export interface PaymentData {
    username: string;
    paymentMethods: {
        id: number;
        name: string;
        installments: Installment[];
    }[];
    identifier: string;
    expirationDate: Date;
}

export function getPaymentData(): PaymentData {
    return {
        username: 'João',
        paymentMethods: [
            {   
                id: 1,
                name: 'Pix',
                installments: [
                    {
                        id: 1,
                        times: 1,
                        cost: 30500,
                        cashbackPercent: 3,
                        immediateMoneyReturn: 300
                    },
                ],
            },
            {
                id: 2,
                name: 'Pix Parcelado',
                installments: [
                    {
                        id: 1,
                        times: 2,
                        cost: 15300,
                    },
                    {
                        id: 2,
                        times: 3,
                        cost: 10196.66,
                    },
                    {
                        id: 3,
                        times: 4,
                        cost: 7725,
                        feeDiscountPercentage: 3,
                        betterOption: true,
                    },
                    {
                        id: 4,
                        times: 5,
                        cost: 6300,
                    },
                    {
                        id: 5,
                        times: 6,
                        cost: 5283.33,
                    },
                    {
                        id: 6,
                        times: 7,
                        cost: 4542.85,
                    },
                ]
            },
        ],
        identifier: 'sRuENJviblXe4p6',
        expirationDate: new Date()
    }
}