const LOAD_DEPA = 'LOAD_DEPA'

export const loadDepa = db => {
    return {
      type: LOAD_DEPA,
      db
    }
  }

export const template = value => {
    return {
      type: LOAD_DEPA,
      value
    }
  }