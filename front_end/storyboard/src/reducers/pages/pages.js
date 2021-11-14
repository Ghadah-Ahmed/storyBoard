const initialState = {
  pages: [],
};

const pages = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PAGES":
      return { 
        pages: [...state.pages, payload ]
      };
    default:
      return state;
  }
};

export default pages;

export const addPages = (pages) => {
  return {
    type: "ADD_PAGES",
    payload: pages,
  };
};

