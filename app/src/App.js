import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {PageLayout} from "./components/PageLayout/PageLayout";
import {PostsList} from "./components/PostsList/PostsList";
import {getAllPhpDatas} from "./domain/helpers/wordpress_helper";
import {Layout} from "./components/Layout";

export function App(props) {
    const {posts, postsThumbnails, siteInfos, page, isPostPage} = getAllPhpDatas(props);

    return (
        <Layout {...props}>
            <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                <Header siteInfos={siteInfos} />

                <div style={{flex: 1}}>
                    {page &&
                    <PageLayout page={page} postsThumbnails={postsThumbnails}/>
                    }
                    {!isPostPage &&
                    <PostsList posts={posts} postsThumbnails={postsThumbnails}/>
                    }
                </div>

                <Footer siteInfos={siteInfos} />
            </div>
        </Layout>
    )
}