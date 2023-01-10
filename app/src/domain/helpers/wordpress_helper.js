/*https://developer.wordpress.org/rest-api/reference/*/
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
    'settings',
    'themes',
    'search',
    'block-types',
    'blocks',
    'block-renderer',
    'plugins'
];

function fetchApi(key) {
    return fetch(`/wp-json/wp/v2/${key}`)
        .then(response => response.json())
        .then((json) => json);
}

export function getAllApiDatas() {
    const allApiDatas = [];

    API_ENDPOINTS.forEach((key) => {
        fetchApi(key).then(data => allApiDatas[key] = data);
    });

    return allApiDatas;
}
