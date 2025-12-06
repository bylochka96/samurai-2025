// bookmarks urls
// @ts-ignore
const apiHub = 'https://apihub.it-incubator.io/';

// base api url
export const baseApiUrl: string = 'https://musicfun.it-incubator.app/api/1.0';

// end-points
export const endpoints = {
    getAllTracks: '/playlists/tracks',
    getLyrics: (trackId: number) => `/playlists/tracks/${trackId}`,
};

//api-key parameter for api request's header
export const apiKey: string = 'find at apiHub';