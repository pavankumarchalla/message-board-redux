import {postReducer} from '../post_reducer';

it("should handle add posts action", () => {
    let action = {type: "ADD_POST", post:'test1'};
    expect(postReducer([],action).length).toEqual(1)
});

it("should handle unknown action", () => {
    let action = {type: 'UNKNOWN'};
    expect(postReducer([],action).length).toEqual(0)
})