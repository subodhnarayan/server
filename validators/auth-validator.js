const { z } = require("zod");

//creating object schema

const singupSchema = z.object({
    username: z
        .string({ required_error: "Name is Required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 chars." })
        .max(255, { message: "Name must not be more than 255 characters" }),

    email: z
        .string({ required_error: "Email is Required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 chars." })
        .max(255, { message: "Email must not be more than 255 characters" }),

    phone: z
        .string({ required_error: "Phone is Required" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 chars." })
        .max(20, { message: "Name must not be more than 20 characters" }),

    password: z
        .string({ required_error: "Password is Required" })
        .trim()
        .min(7, { message: "password must be at least of 6 chars." })
        .max(1024, { message: "password must not be more than 1024 characters" }),

});

const loginSchema = z.object({

    email: z
        .string({ required_error: "Email is Required" })
        .trim()
        .min(3, { message: "Email must be at least of 3 chars." })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is Required" })
        .trim()
        .min(7, { message: "password must be at least of 6 chars." })
        .max(1024, { message: "password must not be more than 1024 characters" }),

});


const conctactSchema = z.object({
    username: z
        .string({ required_error: "Name is Required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 chars." })
        .max(255, { message: "Name must not be more than 255 characters" }),

    email: z
        .string({ required_error: "Email is Required" })
        .trim()
        .min(3, { message: "Email must be at least of 3 chars." })
        .max(255, { message: "Email must not be more than 255 characters" }),


    messsage: z
        .string({ required_error: "Message is Required" })
        .trim()
        .min(7, { message: "message must be at least of 6 chars." })
        .max(1024, { message: "password must not be more than 20000 characters" }),

});





module.exports = { singupSchema, loginSchema, conctactSchema };