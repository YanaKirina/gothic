import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('items')
@ApiTags('Товары') // Группировка в Swagger
export class ItemsController {
  @Get()
  @ApiOperation({ summary: 'Получить все товары' })
  @ApiResponse({ status: 200, description: 'Список товаров получен' })
  getItems() {
    return [
      { id: 1, name: 'Товар 1' },
      { id: 2, name: 'Товар 2' },
    ];
  }
}
