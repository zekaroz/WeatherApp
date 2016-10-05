import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {

   return (
      <div className="chart">
        <Sparklines height={props.height} width={props.width} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div className="text-center"> { average(props.data)  } {props.units}</div>
      </div>
   );
}
