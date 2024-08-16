import { NextRequest } from "next/server";
import { generateResponseError } from "@/lib/utils";
import ApiStrings from "@/app/api/ApiStrings";
import User from "@/models/User";
import MockUserCreate from "@/services/MockUserCreate";
import { UserSchema } from "@/services/UserSchema";
import { ZodError } from "zod";

export async function POST(request:NextRequest){
    try {
        const requestJson = await request.json();
        const UserCreate: User =   
            new MockUserCreate();
        const validatedUser = UserSchema.parse(requestJson);
        await UserCreate.create(validatedUser);

        return Response.json(requestJson);
    } catch (error) {
        console.error(ApiStrings.consoleProductPostError, error);

        if (error instanceof ZodError)
            return generateResponseError({
                message: ApiStrings.invalidFieldsMessage,
            });

        return generateResponseError({
            message: ApiStrings.productCreationErrorMessage,
        });
    }
}