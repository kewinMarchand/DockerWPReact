import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {PageLayout} from "./components/PageLayout/PageLayout";
import {PostsList} from "./components/PostsList/PostsList";
import {WordpressProps} from "./domain/model/model";
import {getAllApiDatas} from "./domain/helpers/wordpress_helper";
import GlobalStyles from '@mui/material/GlobalStyles';
import useTheme from '@mui/material/styles/useTheme';


export function App(props) {
    const theme = useTheme()
    /*console.log({props});*/
    const {posts, postsThumbnails, siteInfos, user, page, isPostPage} = new WordpressProps(props);
    /*console.log({posts, postsThumbnails, siteInfos, user, page, isPostPage});*/

    console.log('allApiDatas', getAllApiDatas());

    return (
        <>
            <GlobalStyles styles={{
                h1: {...theme.typography.h1},
                h2: {...theme.typography.h2},
                h3: {...theme.typography.h3},
                h4: {...theme.typography.h4},
                h5: {...theme.typography.h5},
                h6: {...theme.typography.h6},
                p: {...theme.typography.body1}
            }}/>
            <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                <Header siteInfos={siteInfos} />

                <div style={{flex: 1}}>
                    <PageLayout page={page} postsThumbnails={postsThumbnails} />
                    {!isPostPage &&
                    <PostsList posts={posts} postsThumbnails={postsThumbnails}/>
                    }
                </div>

                <Footer siteInfos={siteInfos} />
            </div>
        </>
    )
}