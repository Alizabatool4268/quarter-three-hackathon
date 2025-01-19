import { defineType } from "sanity";

const signup = defineType({
    name:"signup",
    title:"signup",
    type:"document",
    fields:[
        {
            name:"username",
            title:"user name",
            type:"string", 
        },
        {
            name:"password",
            title:"password",
            type:"string",
        },
        {
            name:"email",
            title:"user email",
            type:"string"
        }
    ]
});
export default signup;