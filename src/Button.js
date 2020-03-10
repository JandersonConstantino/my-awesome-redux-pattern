import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

/// Importo as actions do counter
import { types as CounterTypes } from './store/ducks/counter'

const Button = () => {
  const { value } = useSelector(store => store.counter)
  // crio o dispatch do redux
  const dispatch = useDispatch()

  /// cada botão eu estou passando um type, de decrement e increment,
  /// para cada type, no duck do counter eu tenho uma função que será chamada
  return (
    <>
      <button
        onClick={() => dispatch({ type: CounterTypes.DECREMENT })}
        style={{ display: 'block' }}
      >
        Decrement
      </button>
      <label>{value}</label>
      <button
        onClick={() => dispatch({ type: CounterTypes.INCREMENT })}
        style={{ display: 'block' }}
      >
        Increment
      </button>
    </>
  )
}

export default Button
