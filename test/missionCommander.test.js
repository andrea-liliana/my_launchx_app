describe("Esto es una suite de pruebas", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    });
})
  