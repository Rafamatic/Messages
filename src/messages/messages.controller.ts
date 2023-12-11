import { Controller , Get , Post , Body , Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService: MessagesService;

    constructor(){
        //Service is creating it's own dependency
        //Don't do it in Real Apps
        this.messageService = new MessagesService();
    }
    
    @Get()
    listMessage(){
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        return this.messageService.findOne(id);
    }

}
