import Loading from "@/components/core/Loading.tsx";
import { IAny } from "@/helpers/Interfaces/Any.ts";
import { IPostResponse } from "@/helpers/Interfaces/ipost.interface.ts";
import { useLazyGetPostsQuery } from "@/redux/services/apis/post.ts";
import PostTable from "@/views/admin/page/postManagement/Table/PostTable.tsx";
import { Label } from "@mui/icons-material";
import { Box, Modal, TextareaAutosize, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React, { NamedExoticComponent, ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";

const MODAL_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface PostManagementPageProps{
}

const PostManagementPage: NamedExoticComponent<PostManagementPageProps> = React.memo(
  function( props: PostManagementPageProps ): ReactNode{
    const [ viewedPostId, setViewedPostId ] = useState<number>();
    const [ postData, setPostData ] = useState<IPostResponse>();
    const [ trigger, {
      data: postDataResponded,
      error,
      isLoading
    } ]: [ trigger: ( param: IAny ) => void, {
      data: IPostResponse[],
      [ key: string ]: any
    } ]|any = useLazyGetPostsQuery( {} );
    useEffect( () => {
      if( error ){
        toast.error( error?.[ "message" ] );
      }
    }, [ error ] );
    useEffect( () => {
      viewedPostId && trigger( { id: viewedPostId } );
    }, [ viewedPostId ] );
    useEffect( () => {
      setPostData( postDataResponded?.length === 1 ? postDataResponded[ 0 ] : undefined );
    }, [ postDataResponded ] );
    return ( <>
      <PostTable setViewedPostId={ ( id?: number ) => {
        setViewedPostId( id );
      } }/>
      <Modal
        open={ !!viewedPostId }
        onClose={ () => {
          setViewedPostId( undefined );
          setPostData( undefined );
        } }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ MODAL_STYLE }>{
          isLoading || !postData ? <Loading/> :
            <><Typography id="modal-modal-title" variant="h6" component="h2">
              Post Detail
            </Typography>
              <Grid container direction="column" spacing={ 2 }>
                <Grid container direction="row" spacing={ 2 }>
                  <Grid>
                    <InputLabel>Id:</InputLabel>
                  </Grid>
                  <Grid>
                    <Box>{ postData?.id }</Box>
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={ 2 }>
                  <Grid>
                    <InputLabel>User Id:</InputLabel>
                  </Grid>
                  <Grid>
                    <Box>{ postData?.userId }</Box>
                  </Grid>
                </Grid>
                <Grid container direction="column" spacing={ 1 }>
                  <Grid>
                    <InputLabel>Title:</InputLabel>
                  </Grid>
                  <Grid>
                    <Box sx={ { marginLeft: 1 } }>{ postData?.title }</Box>
                  </Grid>
                </Grid>
                <Grid container direction="column" spacing={ 1 }>
                  <Grid>
                    <InputLabel>Content:</InputLabel>
                  </Grid>
                  <Grid>
                    <Box sx={ { marginLeft: 1 } }>{ postData?.body }</Box>
                  </Grid>
                </Grid>
              </Grid>
            </> }
        </Box>

      </Modal>
    </> )
      ;
  }
);
export default PostManagementPage;