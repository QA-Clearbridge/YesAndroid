describe("Launch Screen", () => {
  it("should not login with invalid credentials",async () => {
      //Access the Allow permission button
      await $('//*[@text="Allow"]').click();
      //Access the using location permission button
      await $('//*[@text="While using the app"]').click();
  });
});