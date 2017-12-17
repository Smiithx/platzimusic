/**
 * Created by Dell n411z on 17/12/2017.
 */
import config from './config';
const { apiKey } = config;
const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=${apiKey}&format=json`;

export default function getArtists() {
    return fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}