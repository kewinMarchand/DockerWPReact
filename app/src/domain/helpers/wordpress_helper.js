/*https://developer.wordpress.org/rest-api/reference/*/
import {WordpressProps} from "../model/model";

const API_ENDPOINTS = [
    '', // posts
    'categories',
    'tags',
    'pages',
    'comments',
    'taxonomies',
    'media',
    'users',
    'types',
    'statuses',
    // 'settings', Unauthorized
    // 'themes', Unauthorized
    'search',
    // 'block-types', Unauthorized
    'blocks',
    // 'block-renderer', Unauthorized
    // 'plugins' Unauthorized
];

function fetchApi(key) {
    return fetch(`/wp-json/wp/v2/${key}`)
        .then(response => response.json())
        .then((json) => json);
}

export function getAllPhpDatas(props) {
    const phpDatas = new WordpressProps(props);

    return phpDatas;
}

export function getAllApiDatas() {
    const allApiDatas = [];

    API_ENDPOINTS.forEach((key) => {
        fetchApi(key).then(data => allApiDatas[key] = data);
    });

    return allApiDatas;
}
