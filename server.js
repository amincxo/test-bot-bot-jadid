const TelegramBot = require('node-telegram-bot-api')
const token = '';
const admin = ;

const bot = new TelegramBot(token,{polling: true});


// bot.onText(/\/start/ , msg => {
//     console.log(msg);
//     setTimeout(()=>{bot.sendMessage(msg.chat.id ,'سلام به ربات  ها خوش امدید')},300);
//     bot.sendMessage(234846044 , '  \nرییس یک وارد شد \n '
//      +"id: "+ msg.chat.id
//      +"\nنام :  "+ msg.chat.first_name
//      +"\n یوزرنیم : "+ msg.chat.username
//      +"\nپیام : "+ msg.text
//      );
// })
let counter =0;
bot.on('message' , msg  => {
    if (msg.text =='+'){
        counter++
    }
    else if (msg.text == 'نمایش شمارنده'){
        bot.sendMessage(admin, counter)
    }
    if (msg.text == "/start") {
        console.log(msg);
        setTimeout(()=>{bot.sendMessage(msg.chat.id ,'سلام به ربات جغی ها خوش امدید')},300);
        bot.sendMessage(234846044 , '  \nرییس یک وارد شد \n '
         +"id: "+ msg.chat.id
         +"\nنام :  "+ msg.chat.first_name
         +"\n یوزرنیم : "+ msg.chat.username
         +"\nپیام : "+ msg.text
         );
         
    }
    
    else if (msg.text == 'سلام'){
        bot.sendMessage(234846044 , 'یک نفر وارد شد')
        bot.sendVideo(msg.chat.id , 'id of video')
        bot.sendVideo(msg.chat.id , 'id of video')
        bot.sendVideo(msg.chat.id , 'id of video')        
    }
    console.log(msg)
    if (msg.chat.id != 234846044) {
        // ریپورت پیام به ادمین
        bot.sendMessage(234846044 , '  \nرییس یک پیام داد \n '
        +"id: "+ msg.chat.id
        +"\nنام :  "+ msg.chat.first_name
        +"\n یوزرنیم : "+ msg.chat.username
        +"\nپیام : "+ msg.text
        )
        bot.sendVideo(234846044)
    }
     if (msg.chat.id != 234846044){
     }
     
     
        else{// جواب اماده به کار بودن ربات
         bot.sendMessage(234846044 , ' بله رییس ')
        }
        if(msg.video.mime_type == 'video/mp4')
        {
           bot.sendMessage(234846044 , msg.video.file_id)
        }
}
)   
    

console.log('every thing in order ...')
