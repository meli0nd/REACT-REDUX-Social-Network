// import React from "react";
// import { create } from "react-test-renderer";
// import ProfileStatus from "./ProfileStatus";


// describe("Profile status component", () => {
//     test("status from props should be in the state", () => {
//         const component = create(<ProfileStatus status="TESTING STATUS 1231231231" />);
//         const instance = component.getInstance();
//         expect(instance.state.status).toBe("TESTING STATUS 1231231231");
//     });
//     test("after creation <span> should be displayed", () => {
//         const component = create(<ProfileStatus status="TESTING STATUS 1231231231" />);
//         const instance = component.root;
//         let span = instance.findByType('span')
//         expect(span).not.toBeNull();
//     });
//     test("after creation <span> should contain correct status", () => {
//         const component = create(<ProfileStatus status="TESTING STATUS 1231231231" />);
//         const instance = component.root;
//         let span = instance.findByType('span')
//         expect(span.children[1]).toBe("TESTING STATUS 1231231231");
//     });
//     test("after creation <input> should be displayed in editMode instead of span", () => {
//         const component = create(<ProfileStatus status="TESTING STATUS 1231231231" />);
//         const instance = component.root;
//         const span = instance.findByType('span')
//         span.props.onDoubleClick()
//         const input = instance.findByType('input')
//         expect(input.props.value).toBe('TESTING STATUS 1231231231')
//     });
//     test("callback should be called", () => {
//         const mockCallback = jest.fn()
//         const component = create(<ProfileStatus status="TESTING STATUS 1231231231" updateStatus={mockCallback} />);
//         const instance = component.getInstance();
//         instance.deactivateEditMode()
//         expect(mockCallback.mock.calls.length).toBe(1)
//     });
// });
