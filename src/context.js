import React,{useContext, useEffect , useReducer} from "react";
import reducer from "./reducer";

let api = "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=";

const initialState = {
    isLoading:true,
    query:"BinomialTheorem_901",
    questions:[],
    index:1,
}


const AppContext = React.createContext();


const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState);
    
    

    const fetchApi = async(url)=>{

        dispatch({type:"SET_LOADING"});

      try {
        const res = await fetch(url);
        const data = await res.json();
        
        // console.log(data[0].Question);
        
        dispatch({type:"GET_DATA" ,
         payload:{
            questions:data[0].Question
         }});
      
    } catch (error) {
      console.log(error);
    }
  }
// To get the next and prev questions
  
 const getNext = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  
  const getPrev = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  // Everytime the query changes useEffect will be called

   useEffect(() => {
     
   fetchApi(`${api}${state.query}`);
     
   }, [state.query])
   
    return (
        <AppContext.Provider value={ {...state ,getNext,getPrev} }>
              {children}
           </AppContext.Provider>
      
          )
};

const useGlobalcontext = ()=>{
    return useContext(AppContext);
}

export{
    AppProvider,AppContext ,useGlobalcontext  
};

