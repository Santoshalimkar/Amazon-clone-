export const initialState = {
  basket: [],
  user:null
};

export const BasketTotal=(basket)=>
  basket?.reduce((amount,item)=> item.price + amount,0);


function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        
      };

    case "REMOVE_FROM_BASKET":
        const index=state.basket.findIndex(
          (basketItem)=>basketItem.id===action.id
        );
        let Newbasket=[...state.basket];
        if (index>=0){
          Newbasket.splice(index,1);
        }
        else{
          console.warn(`cant remove ${action.id}`)

        }
        return {
          ...state,
          basket:Newbasket
        }

        case "SET_USER":
          return{
            ...state,
            user:action.user
          }
        case "REMOVE_USER":
          return{
            ...state,
            user:false
          }




    default:
      return state;
  }
}

export default reducer;
