import { deepEqual } from "$/helpers/utils/obj.ts";
import { validateEmail } from "$/helpers/utils/validation.ts";
import { Box, Container, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Unstable_Grid2";
import { DatePicker } from "antd";
import { DatePickerType } from "antd/es/date-picker";
import dayjs from "dayjs";
import { toast } from "sonner";
import validator from "validator";
import React, {
  ChangeEvent,
  FC,
  memo,
  NamedExoticComponent,
  ReactNode,
  useCallback,
  useState
} from "react";
import { useForm } from "react-hook-form";
import { ISettings } from "$/helpers/Interfaces/isettings.interface.ts";
// interface RangePickerProps{
//   defaultValue?: [ dayjs.Dayjs, dayjs.Dayjs ],
//   style?: { width: string; height: string },
//   onChange?: ( [ startDate, endDate ]: readonly [ any, any ], dateString: string[] ) => void
// }
interface RangePickerProps{
  defaultValue?: [ dayjs.Dayjs, dayjs.Dayjs ] | undefined;
}

const { RangePicker }: DatePickerType = DatePicker;
// interface SettingsPageProps{
// }
const SettingsPage: FC = React.memo(
  function(): ReactNode{
    const settings: ISettings = JSON.parse( window.localStorage[ "settingData" ] ?? "{}" );
    const {
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm();
    const [ value, setCurValue ] = useState( settings );
    const titleChange = useCallback( function( event: ChangeEvent<HTMLInputElement> ){
      setValue( "title", event.target.value );
      setCurValue( ( prevState: ISettings ) => ( { ...prevState, title: event.target.value } ) );
    }, [] );
    const emailChange = useCallback( function( event: ChangeEvent<HTMLInputElement> ){
      setValue( "email", event.target.value );
      setCurValue( ( prevState: ISettings ) => ( { ...prevState, email: event.target.value } ) );
    }, [] );
    const colorChange = useCallback( function( event: ChangeEvent<HTMLInputElement> ){
      setValue( "backgroundColor", event.target.value );
      setCurValue( ( prevState: ISettings ) => ( { ...prevState, backgroundColor: event.target.value } ) );
    }, [] );
    const dateRangeChange = useCallback( function( data: string[] ){
      setValue( "activeDate", data );
      setCurValue( ( prevState: ISettings ) => ( { ...prevState, activeDate: data } ) );
    }, [] );
    return ( <Container>

      <form onSubmit={ handleSubmit( ( data: any ) => {
        // if( !data.title ){
        //   toast.error( "Title must be filled" );
        //   return;
        // }
        if( data.email && !validateEmail( data.email ) ){
          toast.error( "Email is invalid!" );
          return;
        }
        if( data.backgroundColor && !validator.isHexColor( data.backgroundColor ) && !( /^#([0-9A-Fa-f]{6})$/.test( data.backgroundColor ) ) ){
          toast.error( "Color is invalid!" );
          return;
        }
        if( data.activeDate?.includes( "" ) ){
          toast.error( "Please enter active date!" );
          return;
        }
        window.localStorage[ "settingData" ] = JSON.stringify( { ...settings, ...data } );
        console.log( "settings: ", data );
        toast.success( "Save successfully" );
      } ) }>
        <Grid container alignItems="center" spacing={ 2 }>
          <Grid xs={ 6 }><TextField defaultValue={ settings?.title } sx={ { width: "100%" } } id="title" label="Title"
                                    onChange={ titleChange }
                                    variant="outlined"/></Grid>
          <Grid xs={ 6 }><EmailField defaultValue={ settings?.email } emailChange={ emailChange }/></Grid>
          <Grid xs={ 6 }>
            <InputLabel sx={ { display: "flex" } }>Background Color</InputLabel>
            <ColorPicker defaultValue={ settings?.backgroundColor } colorChange={ colorChange }/></Grid>
          <Grid xs={ 6 }>
            <InputLabel sx={ { display: "flex" } }>Active Date</InputLabel>
            <RangePicker
              defaultValue={ settings.activeDate ? [ dayjs( settings?.activeDate[ 0 ] ), dayjs( settings?.activeDate[ 1 ] ) ] : undefined }
              style={ { width: "100%", height: "56px" } }
              onChange={ ( dates, dateString ) => {
                dateRangeChange( dateString );
              } }/></Grid>
        </Grid>
        <Button disabled={ deepEqual( value, settings ) } type={ "submit" }>Save</Button>

      </form>
    </Container> );
  }
);
const ColorPicker: NamedExoticComponent<{
  colorChange: ( event: ChangeEvent<HTMLInputElement> ) => void,
  defaultValue?: string
}> = memo( ( { colorChange, defaultValue }: {
    defaultValue?: string
    colorChange: ( event: ChangeEvent<HTMLInputElement> ) => void
  } ) => {
    const
      [ color, setColor ] = useState<string>( defaultValue ?? "#ffffff" );
    const handleColorChange = function( event: ChangeEvent<HTMLInputElement> ){
      setColor( event.target.value );
      colorChange( event );
    };
    return <Box>
      <TextField value={ color } onChange={ handleColorChange } sx={ { color: color, width: "80%" } }
                 style={ { color: color + "!important" } }/>
      <TextField type={ "color" } onChange={ handleColorChange } value={ color } sx={ {
        width: "20%",
      } }/>
    </Box>;
  }
);
const EmailField: NamedExoticComponent<{
  emailChange: ( event: ChangeEvent<HTMLInputElement> ) => void,
  defaultValue?: string | undefined
}> = memo( ( { emailChange, defaultValue }: {
    defaultValue?: string | undefined
    emailChange: ( event: ChangeEvent<HTMLInputElement> ) => void
  } ): ReactNode => {
    const [ err, serErr ] = useState( false );
    const handleChange = useCallback( ( event: ChangeEvent<HTMLInputElement> ) => {
      serErr( !validateEmail( event.target.value ) );
      emailChange( event );
    }, [] );
    return <TextField defaultValue={ defaultValue } sx={ { width: "100%" } } id="email" label="Email" error={ err }
                      onChange={ handleChange }
                      type={ "email" }
                      variant="outlined"/>;
  }
);
export default SettingsPage;