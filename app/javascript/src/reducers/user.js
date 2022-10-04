const userReducer = (_, { type, payload }) => {
  switch (type) {
    case "SET_USER": {
      return {
        user: payload.user,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export default userReducer;
