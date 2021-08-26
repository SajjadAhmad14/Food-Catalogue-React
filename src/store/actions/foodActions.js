const foodActions = (foods) => {
  return {
    type: 'FETCH_FOODS',
    foods: foods,
  }
}

export default foodActions;