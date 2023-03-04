const ques = ["AreaUnderTheCurve_901","BinomialTheorem_901","DifferentialCalculus2_901"];

const reducer =(state,action)=>{


    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
            case "GET_DATA":
                return{
                    ...state,
                    isLoading:false,
                    questions:action.payload.questions
                };     
                case "NEXT_PAGE":

                  
                    let currIndex = state.index+1;
                    if(currIndex>=2){
                        currIndex=2;
                    }
                
                    return {
                      ...state,
                      query: ques[currIndex],
                      index:currIndex,
                    };
              
                  case "PREV_PAGE":
                    let prevIndex = state.index-1;
                    if(prevIndex<=0){
                        prevIndex=0;
                    }
                    
                    return {
                      ...state,
                      query:ques[prevIndex],
                      index:prevIndex,
                    };
                  
                    
    }     
    return state;  
  
};

export default reducer;