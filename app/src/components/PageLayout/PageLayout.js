import Box from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function PageLayout(props) {
    const {page, postsThumbnails} = props;
    return (
        <section style={{padding: 16}}>
            {postsThumbnails[page.id] &&
                <picture style={{backgroundColor: 'lightgrey', display: 'flex', aspectRatio: '3/2'}}>
                    <img
                        src={postsThumbnails[page.id].slice(1, -1).replace(/\\\//g, "/")}
                        alt={page.name}
                        style={{height: '100%', width: '100%', objectFit: 'cover'}}
                    />
                </picture>
            }
            <Typography variant={'h1'} align={'center'} mb={3}>
                {page.title}
            </Typography>
            <div dangerouslySetInnerHTML={{__html: page.content}}/>
        </section>
    )
}
