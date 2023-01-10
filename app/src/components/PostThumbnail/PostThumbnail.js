import Box from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function PostThumbnail(props) {
    const {post, postThumbnails} = props;
    return (
        <Box
            id={post.id}
            display={'flex'}
            flexDirection={'column'}
            height={'100%'}
            borderRadius={1}
            border={'1px solid lightgrey'}
            p={2}
        >
            <Box
                component={'picture'}
                mb={2}
                bgcolor={'lightgrey'}
                display={'flex'}
                sx={{aspectRatio: '3/2'}}
            >
                <img
                    src={postThumbnails[post.id] && postThumbnails[post.id].slice(1, -1).replace(/\\\//g, "/")}
                    alt={post.name}
                    style={{height: '100%', width: '100%', objectFit: 'cover'}}
                />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={2}>
                <Typography variant={'body2'}>
                    {post.author}
                </Typography>
                <Typography variant={'body2'}>
                    {post.date}
                </Typography>
            </Box>
            <Typography variant={'h6'} component={'p'} mb={2}>
                {post.title}
            </Typography>
            <Box flex={1} mb={2}>
                <Typography variant={'body1'}>
                    {post.excerpt.slice(1, -1)}
                </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <a href={post.guid}>Lire l'article</a>
            </Box>
        </Box>
    )
}
