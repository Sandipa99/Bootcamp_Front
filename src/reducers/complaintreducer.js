const initialState = {
  complaint: []
};

export const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPLAINT":
      return {
        ...state,
        complaint: [...state.complaint, action.payload],
      };
    default:
      return state;
  }
};
