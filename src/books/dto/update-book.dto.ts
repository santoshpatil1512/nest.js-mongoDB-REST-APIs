import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/books.schemas"
import { User } from "../../auth/schemas/user.schema";


export class UpdateBookDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category, { message: 'Please enter correct Category.' })
    readonly category: Category;

    @IsEmpty({ message: 'Please enter correct Category.' })
    readonly user: User;
}