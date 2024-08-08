import { LineChart } from "@mui/x-charts";
import { memo, FC, NamedExoticComponent } from "react";

interface IProps{
  children: FC;
}

function getLast7Days(){
  const days = [];
  const today = new Date();
  for( let i = 0; i < 7; i++ ){
    const day = new Date( today );
    day.setDate( today.getDate() - i );
    days.push( day.toISOString().split( "T" )[ 0 ] ); // Định dạng ngày dưới dạng YYYY-MM-DD
  }
  return days;
}
const SubscriptionPage: FC | NamedExoticComponent<IProps> = memo(
  function( props: IProps ){
    const subscription = [ 28, 29, 33, 36, 32, 32, 23 ];
    // const pData = [ 12, 11, 14, 18, 17, 13, 13 ];
    const xLabels = getLast7Days();
    return (
      <LineChart
        sx={ {
          width: "100%",
          height: "100%"
        } }
        height={ 500 }
        series={ [
          { data: subscription },
        ] }
        grid={ { horizontal: true } }
        xAxis={ [ { scaleType: "point", data: xLabels, label: "Date" } ] }
        yAxis={ [ { label: "Subscription (Subs)" } ] }
      />
    );
  }
);
export default SubscriptionPage;