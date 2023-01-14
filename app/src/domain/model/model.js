export class WordpressProps {
    constructor(wordpressProps) {
        this.wp_content = JSON.parse(wordpressProps.wp_content);
        this.wp_description = wordpressProps.wp_description;
        this.wp_name = wordpressProps.wp_name;
        this.wp_posts = JSON.parse(wordpressProps.wp_posts);
        this.wp_thumbs = JSON.parse(wordpressProps.wp_thumbs);
        this.wp_url = wordpressProps.wp_url;
        this.wp_menu = JSON.parse(wordpressProps.wp_menu);
        this.wp_page = JSON.parse(wordpressProps.wp_page);
        this.wp_user = JSON.parse(wordpressProps.wp_user);
    }

    get siteInfos() {
        return {
            description: this.wp_description,
            name: this.wp_name,
            url: this.wp_url,
            menu: this.menu
        }
    }

    get page() {
        if (this.wp_page) {
            return new Page(this.wp_page);
        }
    }

    get posts() {
        if (!this.wp_posts) {return [];}
        let initializedPosts = [];
        this.wp_posts.map(rawPost => {
            initializedPosts.push(new Post(rawPost));
        })
        return initializedPosts;
    }

    get postsThumbnails() {
        let initializedThumbs = [];
        Object.entries(this.wp_thumbs).map(([key, rawThumb]) => {
            initializedThumbs[key] = rawThumb;
        })
        return initializedThumbs;
    }

    get menu() {
        if (!this.wp_menu) {return [];}
        let initializedMenus = [];
        this.wp_menu.map(rawMenu => {
            initializedMenus.push(new NavMenuItem(rawMenu));
        })
        return initializedMenus;

    }

    get user() {
        return new User(this.wp_user);
    }

    get isPostPage() {
        return this.page && "post" === this.page.type
    }
}

export class User {
    constructor(rawUser) {
        this.id = rawUser.ID;
        this.data = rawUser.data;
        this.roles = rawUser.roles;
    }
}

export class NavMenuItem {
    constructor(rawNavMenu) {
        this.id = rawNavMenu.ID;
        this.title = rawNavMenu.title;
        this.url = rawNavMenu.url;
    }
}

export class Page {
    constructor(rawPage) {
        this.id = rawPage.ID;
        this.type = rawPage.post_type;
        this.name = rawPage.post_name;
        this.author = rawPage.post_author;
        this.title = rawPage.post_title;
        this.content = rawPage.post_content;
        this.excerpt = rawPage.post_excerpt;
        this.rawDate = rawPage.post_date;
    }

    get date() {
        return new Date(this.rawDate).toLocaleDateString();
    }
}

export class Post {
    constructor(rawPost) {
        this.id = rawPost.ID;
        this.type = rawPost.post_type;
        this.name = rawPost.post_name;
        this.author = rawPost.post_author;
        this.title = rawPost.post_title;
        this.content = rawPost.post_content;
        this.excerpt = rawPost.post_excerpt;
        this.rawDate = rawPost.post_date;
        this.guid = rawPost.guid;
    }

    get date() {
        return new Date(this.rawDate).toLocaleDateString();
    }
}
