type SummaryReportType = {
    totals: {
        totalTime: number;
        totalBillableTime: number;
        entriesCount: number;
        totalAmount: number;
    }[];
    groupOne: {
        _id: string;
        duration: number;
        amount: number;
        name: string;
        children: {
            _id: string;
            duration: number;
            amount: number;
            name: string;
            children: {
                _id: string;
                duration: number;
                amount: number;
                name: string;
            }[];
        }[];
    }[];
};
export { SummaryReportType, };
