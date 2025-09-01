import assert from "assert";
import { 
  TestHelpers,
  Blonks_Approval
} from "generated";
const { MockDb, Blonks } = TestHelpers;

describe("Blonks contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Blonks contract Approval event
  const event = Blonks.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Blonks_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Blonks.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBlonksApproval = mockDbUpdated.entities.Blonks_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBlonksApproval: Blonks_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBlonksApproval, expectedBlonksApproval, "Actual BlonksApproval should be the same as the expectedBlonksApproval");
  });
});
