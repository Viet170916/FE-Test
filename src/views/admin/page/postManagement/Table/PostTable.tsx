import { IPostResponse } from "@/helpers/Interfaces/ipost.interface.ts";
import { useGetPostsQuery } from "@/redux/services/apis/post.ts";
import { colsConfig } from "@/views/admin/page/postManagement/Table/ColsConfig.tsx";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { MaterialReactTable, MRT_Row, useMaterialReactTable } from "material-react-table";
import { memo, FC, NamedExoticComponent, useCallback } from "react";
import { FiEye } from "react-icons/fi";

interface IProps{
  children?: FC;
  setViewedPostId?: ( postId?: number ) => void,
}

const PostTable: NamedExoticComponent<IProps> = memo(
  function( props: IProps ){
    const { data: postData, isLoading }: any =
      useGetPostsQuery( {}, {
        refetchOnReconnect: true,
        refetchOnFocus: true,
      } );
    const viewDetailPost = useCallback( function( postId: number ){
      props.setViewedPostId?.( postId );
    }, [] );
    const table = useMaterialReactTable(
        {
          data: postData ?? [],
          columns: colsConfig,
          enableRowActions: true,
          renderRowActionMenuItems( { row, closeMenu }: { row: MRT_Row<IPostResponse>, [ key: string ]: any } ){
            return ( [ <MenuItem key={ "item_1" }>
              <Button onClick={
                () => {
                  viewDetailPost( row.original.id );
                  closeMenu();
                } }>
                <FiEye/>
              </Button>
            </MenuItem> ] );
          },
          muiTableContainerProps: { sx: { maxHeight: "600px", minWidth: "100%" } },
          initialState: {
            // showColumnFilters: true,
            density: "compact",
            showGlobalFilter: true,
            columnPinning: {
              // left: ['mrt-row-expand', 'mrt-row-select'],
              right: [ "mrt-row-actions" ],
            },
          },
          state: {
            isLoading: isLoading,
          },
          muiSkeletonProps:
            {
              animation: "pulse",
              height: 28,
            },
        },
      )
    ;
    return ( <><MaterialReactTable table={ table }/></> );
  }
);
export default PostTable;