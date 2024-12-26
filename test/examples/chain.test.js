const { qase } = require("jest-qase-reporter/jest");


describe("Example: chain.test.js", () => {
  test("Maintain your test meta-data from code", async () => {
    qase
      .title("Use qase annotation in a chain")
      qase?.fields({
        severity: "high",
        priority: "medium",
        layer: "api",
        description: `Code it quick, fix it slow,
                    Tech debt grows where shortcuts go,
                    Refactor later? Ha! We know.`,
      })
      qase?.attach({ paths: "./test/examples/attachments/test-file.txt" })
      qase?.comment(
        "This comment will be displayed in the 'Actual Result' field of the test result in Qase.",
      );
  });
});
