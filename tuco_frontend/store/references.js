export const state = () => ({
  list: []
});

export const mutations = {
  add(state, reference) {
    state.list.push(reference);
  },
  set(state, reference) {
    state.list = reference;
  },
  emptyList(state) {
    state.list = [];
  }
};

export const getters = {
  list: state => {
    return state.list;
  }
};
