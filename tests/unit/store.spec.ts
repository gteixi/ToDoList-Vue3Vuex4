import store from '../../src/store/index';

describe ('The Store component', () => {
    it('must return State', () => {
    expect(store.state.tasks).toStrictEqual([{"completed": true, "id": 1, "title": "Finish MVP"}, {"completed": false, "id": 2, "title": "100% coverage"}, {"completed": false, "id": 3, "title": "Review code"}]);
    });
});