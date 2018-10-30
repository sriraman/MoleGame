import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  incrementScore: null,
  startGame: [ 'time' ],
  tick: null
})

export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  score: 0,
  isRunning: false,
  time: 0,
  totalTime: 120
})

/* ------------- Reducers ------------- */

export const incrementScore = (state, { }) => {
  if (state.score) {
    return state.merge({ score: state.score + 1 })
  } else {
    return state.merge({ score: 1 })
  }
}

export const startGame = (state, { time }) => {
  return state.merge({ isRunning: true, totalTime: time })
}

export const tick = (state, { }) => {
  if (state.time === state.totalTime) {
    return state.merge({
      isRunning: false
    })
  } else {
    return state.merge({
      time: state.time + 1
    })
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT_SCORE]: incrementScore,
  [Types.START_GAME]: startGame,
  [Types.TICK]: tick
})
