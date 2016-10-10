import {FETCH_WEATHER} from '../actions/index.js';

export default function(state = [], action){
   // in this context the action will be a Request object
   // and what we want from it is the payload.data
   // and that was defined in the actions\index.js

   switch(action.type){
     case FETCH_WEATHER:
        // this is a concat array
        //return [ action.payload.data, ...state ];
        return state?[ action.payload.data, ...state ]:[action.payload.data];
   }

  return state;
}
