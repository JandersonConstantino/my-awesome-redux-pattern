import { createTypes, createReducer } from 'reduxsauce'

// Estado inicial do reducer
const initialState = { value: 0 }

// Criados os types
//
// 'counter: INCREMENT'
// 'counter: DECREMENT'
export const types = createTypes(`
  INCREMENT
  DECREMENT
`,
  { prefix: 'counter: ' }
)

// Função que atualiza o reducer
const increment = (state = initialState, action) => {
  return { ...state, value: state.value + 1 }
}

// Função que atualiza o reducer
const decrement = (state = initialState, action) => {
  return { ...state, value: state.value - 1 }
}

// Actions onde utilizo um de para, ou seja (type: função)
// em cada type, passo a função que será chamada no dispatch desse type
const actions = {
  [types.INCREMENT]: increment,
  [types.DECREMENT]: decrement
}

// exporto o reduce que será combinado na store
export default createReducer(initialState, actions)
