import Clockify from "../src/Clockify";
import {clockifyApiKey, testProjectId, testWorkspaceId} from "./utils";
import {
  RequestSummaryReportGroupsEnum,
  RequestSummaryReportType
} from "../src";
import {RequestDetailedReportType} from "../src";

const clockify = new Clockify(clockifyApiKey);

test("Summary report", async () => {
  const summaryQuery: RequestSummaryReportType = {
    dateRangeStart: new Date(1577836800000), // Jan. 2020
    dateRangeEnd: new Date(1609459199000), // Jan. 2021
    summaryFilter: {
      groups: [RequestSummaryReportGroupsEnum.project],
    }
  }
  const report = await clockify.workspaces.withId(testWorkspaceId).reports.summary.post(summaryQuery);
  expect(report).toBeDefined();
  console.log(report);
  expect(report.totals.length).toBeGreaterThanOrEqual(1);
  expect(report.totals[0].totalTime).toBeGreaterThanOrEqual(60*60);
  expect(report.groupOne.length).toBeGreaterThanOrEqual(1);
  expect(report.groupOne[0].name).toBe("DO NOT DELETE: Test Project");
})

test("Detailed report", async () => {
  const detailedQuery: RequestDetailedReportType = {
    dateRangeStart: new Date(1577836800000), // Jan. 2020
    dateRangeEnd: new Date(1609459199000), // Jan. 2021
    detailedFilter: {}
  }
  const report = await clockify.workspaces.withId(testWorkspaceId).reports.detailed.post(detailedQuery);
  expect(report).toBeDefined();
  expect(report.totals.length).toBeGreaterThanOrEqual(1);
  expect(report.totals[0].totalTime).toBeGreaterThanOrEqual(60*60);
  expect(report.timeentries.length).toBeGreaterThanOrEqual(1);
  expect(report.timeentries[0].projectId).toBe(testProjectId);
})
