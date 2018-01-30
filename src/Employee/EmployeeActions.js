const LOAD_EMPL = 'LOAD_EMPL'

export const loadEmpl = db => {
    return {
      type: LOAD_EMPL,
      db
    }
  }

export const template = value => {
    return {
      type: LOAD_EMPL,
      value
    }
  }