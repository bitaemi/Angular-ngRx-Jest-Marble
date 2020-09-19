import { greet } from "./greet"

describe('greet', () => {
    it('should include name in greet', () => {
        expect(greet('Ems')).toContain('Ems');
    })
})