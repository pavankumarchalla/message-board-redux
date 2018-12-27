import * as actions from '../action'

it('should return the correct type', () => {
    const result = actions.addPost('title')
    expect(result.type).toEqual('ADD_POST');
    expect(result.post).toEqual('title');
});