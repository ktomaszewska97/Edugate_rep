import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getSchools() {
    return request({
        url: API_BASE_URL + "/getschools",
        method: 'GET'
    });
}

export function getCourseRealizations() {

    return request({
        url: API_BASE_URL + "/getcourserealizations",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });

}

export function newdepartament(newDepartamentRequest) {
    return request({
        url: API_BASE_URL + "/newdepartament",
        method: 'POST',
        body: JSON.stringify(newDepartamentRequest)
    });
}

export function newcourse(newCourseRequest) {
        return request({
            url: API_BASE_URL + "/newcourse",
            method: 'POST',
            body: JSON.stringify(newCourseRequest)
        });
}

export function newcourserealization(newCourseRealizationRequest) {
    return request({
        url: API_BASE_URL + "/newcourserealization",
        method: 'POST',
        body: JSON.stringify(newCourseRealizationRequest)
    });
}

export function newschool(newSchoolRequest) {
    return request({
        url: API_BASE_URL + "/newschool",
        method: 'POST',
        body: JSON.stringify(newSchoolRequest)
    });
}

export function signupforcourse(signupRequest) {
    return request({
        url: API_BASE_URL + "/addsignupforcourse",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });

}

export function getCourses() {

    return request({
        url: API_BASE_URL + "/getcourses",
        method: 'GET'
    });
}

export function getCourseById() {
    return request({
        url: API_BASE_URL + "/getcourses/1",
        method: 'GET'
    });
}