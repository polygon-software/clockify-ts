type WeeklyReportType = {
    totals: {
        totalTime: number;
        totalBillableTime: number;
        entriesCount: number;
        totalAmount: number;
    }[];
    totalsByDay: {
        amount: number;
        duration: number;
        date: Date;
    }[];
    groupOne: {
        _id: string;
        duration: number;
        amount: number;
        name: string;
        days: {
            amount: number;
            duration: number;
            date: Date;
        }[];
        children: {
            _id: string;
            duration: number;
            amount: number;
            name: string;
            color: string;
            clientName: string;
            days: {
                amount: number;
                duration: number;
                date: Date;
            }[];
        }[];
    }[];
};
export { WeeklyReportType, };
