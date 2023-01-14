import {PostThumbnail} from "../PostThumbnail/PostThumbnail";
import Grid from '@mui/material/Grid';

export function PostsList(props) {
    const {posts, postsThumbnails} = props;

    if (!posts.length) {
        return <></>;
    }

    return (
        <Grid container p={2} mt={3} spacing={3}>
            {posts.map((post) => (
                <Grid item sm={6} md={4} lg={3}>
                    <PostThumbnail key={post.id} post={post} postThumbnails={postsThumbnails}/>
                </Grid>
            ))}
        </Grid>
    )
}
