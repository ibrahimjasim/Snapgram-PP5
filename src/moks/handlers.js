import { rest } from "msw"

const baseURL = "https://snapgram-api-df7c5b682dbd.herokuapp.com/"

// Array of handlers to manage the mock responses for different API endpoints
export const handlers = [
     // Mock handler for GET requests to 'user' endpoint
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 4,
            "username": "Aya-ij",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 4,
            "profile_image": "https://res.cloudinary.com/dju1fkr93/image/upload/v1/media/../default_profile_fqfn5s"
        })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];