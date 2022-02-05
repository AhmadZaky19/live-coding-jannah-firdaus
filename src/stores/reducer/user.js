const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_DATA_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        data: action.payload.data.data
      };
    }
    case "GET_DATA_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        data: []
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default user;
