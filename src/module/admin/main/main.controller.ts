import { Controller,Get } from '@nestjs/common';

@Controller('admin')
export class MainController {

    @Get() 
    index() {

        return '后台首页'
    }
}
