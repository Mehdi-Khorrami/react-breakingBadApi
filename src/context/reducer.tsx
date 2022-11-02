import { NoLuggageOutlined } from "@mui/icons-material";
import { actionType } from "./action_type";

export const initialStateValue = {
    login: {
        username: null,
        password: null,
    },
    status: true,
    characters: null,
    details: {},
    pagination: {
        size: 12,
        count: 6,
        page: 1,
    },
    errorMessage: null,
}
export const reducer = (state, action) => {
    switch (action.type) {
        case actionType.login:
            return {
                ...state,
                login: {
                    ...action.payload
                },
            };
        case actionType.characters:
            return {
                ...state,
                characters: action.payload.characters
            };
        case actionType.status:
            return {
                ...state,
                status: false,
                details: action.payload
            }
        case actionType.delete:
            return {
                ...state,
                status: true
            }
        case actionType.pagination:
            return {
                ...state,
                characters: null,
                pagination: {
                    size:12 ,
                    count:6 ,
                    page: action.payload,
                }

            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}