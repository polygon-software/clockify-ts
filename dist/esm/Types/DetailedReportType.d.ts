type DetailedReportType = {
    totals: {
        totalTime: number;
        totalBillableTime: number;
        entriesCount: number;
        totalAmount: number;
    }[];
    timeentries: {
        _id: string;
        description: string;
        userId: string;
        billable: boolean;
        taskId: string;
        projectId: string;
        clientId: string;
        timeInterval: {
            start: Date;
            end: Date;
            duration: number;
        };
        approvalRequestId: string;
        taskName: string;
        tags: string[];
        isLocked: boolean;
        customFields: {
            customFieldId: string;
            value: string;
        }[];
        invoicingInfo: {
            invoiceId: string;
            invoiceNumber: string;
            manuallyInvoiced: boolean;
        };
        amount: number;
        rate: number;
        userName: string;
        userEmail: string;
        projectName: string;
        projectColor: string;
        clientName: string;
    }[];
};
export { DetailedReportType, };
