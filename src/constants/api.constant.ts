export const COURSES_API=
{
    BASE_URL: '/api/v1/courses',
    SUB_URL: {
        SEARCH_SUGGESTIONS: {
            BASE_URL: '/search-suggestions',
            QUERY: {
                keyword: 'keyword'
            }
        },
        GET_STUDENT_VIEWING_COURSES: {
            BASE_URL: '/student-viewing-courses',
            QUERY: {
                page: 'page',
                pageSize: 'pageSize',
            }
        },
        GET_COURSE_MODULES: {
            BASE_URL: '/modules',
        }
    }
}


export const DISCOVERY_API = {
    BASE_URL: '/api/v1/discovery'
}


export const AUTH_API = {
    BASE_URL: '/api/v1/auth',
    SUB_URL: {
        LOGIN: '/login',
        REGISTER: '/register',
        LOGOUT: '/logout',
        REFRESH: '/refresh',
    }
}


export const USER_API = {
    BASE_URL: '/api/v1/users',
    SUB_URL: {
        ME: '/me',
    }
}


export const CART_API = {
    BASE_URL: '/api/v1/cart',
}


export const INSTRUCTOR_API = {
    BASE_URL: '/api/v1/instructors',
    SUB_URL: {
        PROFILE: '/profile',
    }
}