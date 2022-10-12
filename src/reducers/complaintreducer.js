const initialState = {
  complaint: [],
  complaint: {},
};

export const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPLAINT":
      return { ...state, complaint: action.payload };
    // case "GET_EMP_BY_ID":
    //   return { ...state, employee: action.payload };
    case "ADD_COMPLAINT":
      return {
        ...state,
        complaint: [...state.complaint, action.payload],
      };
    // case "DELETE_EMPLOYEE":
    //   const employees = state.employees.filter(
    //     (e) => e.id !== action.payload.id
    //   );
    //   return { ...state, employees: employees };
    // case "UPDATE_EMPLOYEE":
    //   return state.employees.map((p) =>
    //     p.id === action.payload.id ? action.payload : p
    //   );
    default:
      return state;
  }
};
