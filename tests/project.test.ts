import Clockify from "../src/Clockify";
import {
  randomInt,
  randomString,
  clockifyApiKey,
  testProjectId,
  testUserId,
  testWorkspaceId
} from "./utils";
import {BudgetEstimateTypeEnum, TimeEstimateTypeEnum} from "../src/Types/EstimateType";

const clockify = new Clockify(clockifyApiKey);

test("Get all projects on workspace", async () => {
  const projects = await clockify.workspace.withId(testWorkspaceId).projects.get();
  expect(projects.length).toBeGreaterThanOrEqual(1);

  const projectIds = projects.map(project => project.id);
  expect(projectIds).toContain(testProjectId);
})

test("Find project by ID", async () => {
  const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).get();
  expect(project.id).toBe(testProjectId);
})

test("Add a new project to workspace && Update project on workspace && Delete project from workspace", async () => {
  const name = `Temporary Project: ${randomString()}`;

  // Create new Project
  const project = await clockify.workspace.withId(testWorkspaceId).projects.post({ name });
  expect(project.name).toBe(name);
  expect(project.archived).toBeFalsy();

  // Check if Project is part of workspace now
  const projects = await clockify.workspace.withId(testWorkspaceId).projects.get();
  expect(projects).toContainEqual(project);

  // Archive Project
  const archivedProject = await clockify.workspace.withId(testWorkspaceId).projects.withId(project.id).put({
    name: project.name,
    archived: true,
  })
  expect(archivedProject.id).toBe(project.id);
  expect(archivedProject.name).toBe(name);
  expect(archivedProject.archived).toBeTruthy();

  // Delete Archived Project
  const deletedProject = await clockify.workspace.withId(testWorkspaceId).projects.withId(archivedProject.id).delete();
  expect(deletedProject.id).toBe(archivedProject.id);

  // Check if Project is no longer part of Workspace now
  const projectsAfterDeletion = await clockify.workspace.withId(testWorkspaceId).projects.get();
  const projectIds = projectsAfterDeletion.map(project => project.id);
  expect(projectIds).not.toContain(project.id);
})

test("Update project estimate - Time Estimate", async () => {
  // Fetch test Project
  const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).get();

  // Ensure time estimate is not active
  if (project.timeEstimate !== null) {
    expect(project.timeEstimate.active).toBeFalsy();
  } else {
    expect(project.timeEstimate).toBe(null);
  }


  // Set time estimate
  const timeEstimate = {
    estimate: "PT1H",
    type: TimeEstimateTypeEnum.manual,
    active: true,
  }
  const projectWithEstimate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).estimate.patch({ timeEstimate })

  // Ensure time estimate is set correctly
  expect(projectWithEstimate.timeEstimate).not.toBe(null);
  if (projectWithEstimate.timeEstimate !== null) {
    expect(projectWithEstimate.timeEstimate.active).toBeTruthy();
    expect(projectWithEstimate.timeEstimate.estimate).toBe(timeEstimate.estimate);
    expect(projectWithEstimate.timeEstimate.type).toBe(timeEstimate.type);
  }

  // Set time estimate to inactive again
  const timeEstimateInactive = {
    active: false,
  }
  const projectWithoutEstimate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).estimate.patch({ timeEstimate: timeEstimateInactive })

  // Ensure time estimate is inactive
  if (projectWithoutEstimate.timeEstimate !== null) {
    expect(projectWithoutEstimate.timeEstimate.active).toBeFalsy();
  } else {
    expect(projectWithoutEstimate.timeEstimate).toBe(null);
  }
})

test.skip("Update project estimate - Budget Estimate", async () => {
  // Fetch test Project
  const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).get();

  // Ensure budget estimate is not active
  if (project.budgetEstimate !== null) {
    expect(project.budgetEstimate.active).toBeFalsy();
  } else {
    expect(project.budgetEstimate).toBe(null);
  }


  // Set budget estimate
  const budgetEstimate = {
    estimate: randomInt(),
    type: BudgetEstimateTypeEnum.manual,
    active: true,
  }
  const projectWithEstimate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).estimate.patch({ budgetEstimate })

  // Ensure budget estimate is set correctly
  expect(projectWithEstimate.budgetEstimate).not.toBe(null);
  if (projectWithEstimate.budgetEstimate !== null) {
    expect(projectWithEstimate.budgetEstimate.active).toBeTruthy();
    expect(projectWithEstimate.budgetEstimate.estimate).toBe(budgetEstimate.estimate);
    expect(projectWithEstimate.budgetEstimate.type).toBe(budgetEstimate.type);
  }

  // Set time estimate to inactive again
  const budgetEstimateInactive = {
    active: false,
  }
  const projectWithoutEstimate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).estimate.patch({ budgetEstimate: budgetEstimateInactive })

  // Ensure time estimate is inactive
  if (projectWithoutEstimate.budgetEstimate !== null) {
    expect(projectWithoutEstimate.budgetEstimate.active).toBeFalsy();
  } else {
    expect(projectWithoutEstimate.budgetEstimate).toBe(null);
  }
})

test("Update project memberships", async () => {
  const amount = randomInt();
  const membership = {
    memberships: [
      {
        userId: testUserId,
        hourlyRate: {
          amount
        }
      }
    ]
  }
  const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).memberships.patch(membership);
  const memberships = project.memberships;
  const superuserMembership = memberships.find(membership => membership.userId === testUserId);

  expect(superuserMembership).toBeDefined();
  if (superuserMembership !== undefined) {
    expect(superuserMembership.hourlyRate.amount).toBe(amount);
  }
})

test.skip("Update project template", async () => {
  const projectTemplate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).template.patch({
    isTemplate: true,
  });
  expect(projectTemplate.template).toBeTruthy()

  const projectNoTemplate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).template.patch({
    isTemplate: false,
  });
  expect(projectNoTemplate.template).toBeFalsy()
})
