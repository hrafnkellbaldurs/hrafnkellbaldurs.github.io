import actionTypes from '../actions/actionTypes';

const initialState = [
	{ title: '1' },
	{ title: '2' },
	{ title: '3' },
	{ title: '4' },
	{ title: '5' },
	{ title: '6' }
];

export default function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.TEST_ACTION:
			return [ action.payload.data, ...state ];

		default:
			return state;
	}
}
