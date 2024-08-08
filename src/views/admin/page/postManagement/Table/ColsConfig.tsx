import { IPostResponse } from "$/helpers/Interfaces/ipost.interface.ts";
import { MRT_ColumnDef, MRT_Row } from "material-react-table";
import { ReactNode } from "react";

interface ICellProps{
  renderedCellValue: ReactNode,
  row: MRT_Row<IPostResponse>
}

export const colsConfig: MRT_ColumnDef<IPostResponse>[] = [
  {
    id: "id",
    size: 2,
    enableColumnFilter: false,
    accessorFn: ( data: IPostResponse ) => data.id,
    header: "Id",
    Cell( { renderedCellValue }: ICellProps ){
      return ( <div>{ renderedCellValue }</div> );
    },
  },
  {
    id: "user",
    size: 2,
    accessorFn: ( data: IPostResponse ) => data.userId,
    header: "User Id",
    Cell( { renderedCellValue }: ICellProps ){
      return ( <div>{ renderedCellValue }</div> );
    },
  }, {
    id: "title",
    accessorFn: ( data: IPostResponse ) => data.title,
    header: "Title",
    Cell( { renderedCellValue }: ICellProps ){
      return ( <div>{ renderedCellValue }</div> );
    },
  },
];