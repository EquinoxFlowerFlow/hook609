const defaultData = {
  obj: {},
  data: [],
  visible: false
}

export default function home (state = defaultData, action) {
  switch(action.type){
    case "TECH_HOME_LIST":
      console.log(1)
      return {...state, data: action.payload.users}
    case "TECH_STATUS":
      console.log(1)
      return {...state, visible: action.payload}
    default:
      return state
  }
}



