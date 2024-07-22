import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schemas/books.schemas';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    async getAllBooks( @Query() query: ExpressQuery) : Promise<Book[]> {
        return this.booksService.findAll(query);
    }

    @Post()
    async createBook(
        @Body()
        book : CreateBookDto
    ): Promise<Book> {
        return this.booksService.create(book);
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id: string
    ) : Promise<Book> {
        return this.booksService.findById(id);
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        book : UpdateBookDto
    ): Promise<Book> {
        return this.booksService.updateById(id,book);
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id: string
    ) : Promise<Book> {
        return this.booksService.deleteById(id);
    }
}
