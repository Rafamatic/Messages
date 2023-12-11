import { MessagesRepository } from "./messages.repository";

export class MessagesService{
   messageRepo: MessagesRepository;
   constructor(){
    //Service is creating it's own dependency
    //Don't do it in Real Apps
    this.messageRepo = new MessagesRepository();
   }

findOne (id: string){
    return  this.messageRepo.findOne(id);
}

findAll (){
    return  this.messageRepo.findAll();
}

create (content: string){
    return  this.messageRepo.create(content);
}
    
}