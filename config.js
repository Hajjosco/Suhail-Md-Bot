const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347048395910";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID ||"SUHAIL_18_49_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYW94RXJlVnR1THB5c0VucHpwM24vaHNpRGV0WDhKVkM0bmVXcTJ1TWp1ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0RDZUpaLVRTTC1hNG9vUDg5Wmt6d1wiLFxuICBcInBob25lSWRcIjogXCIwMWZjMzI4YS1mNDc2LTQ1Y2QtYmNkNy0zMWFlMTA2MmVkMzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjgsXG4gICAgICAxOTAsXG4gICAgICAyMDksXG4gICAgICAxODksXG4gICAgICAxMzAsXG4gICAgICAyNDMsXG4gICAgICAxOSxcbiAgICAgIDgzLFxuICAgICAgNyxcbiAgICAgIDYyLFxuICAgICAgNSxcbiAgICAgIDIwMixcbiAgICAgIDQyLFxuICAgICAgMjUzLFxuICAgICAgMjM4LFxuICAgICAgMTQ5LFxuICAgICAgNzIsXG4gICAgICAyMDEsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgNCxcbiAgICAgIDIzMSxcbiAgICAgIDg1LFxuICAgICAgMTgsXG4gICAgICAxNzUsXG4gICAgICAxMjcsXG4gICAgICAyMDEsXG4gICAgICAxMTAsXG4gICAgICAxMzUsXG4gICAgICA4NCxcbiAgICAgIDE4NCxcbiAgICAgIDExOSxcbiAgICAgIDU0LFxuICAgICAgMTQ4LFxuICAgICAgMTg3LFxuICAgICAgNDIsXG4gICAgICAxNDYsXG4gICAgICAxOTQsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREFTOFJZREdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDgzOTU5MTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjA5ODg5ODg2MTI2NTI6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTHJ3NjBHRUtyTndiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRQeDVjZVhlYmV3K0xKYWxUZFhuUkZ3dC9tMkhLVFBkNE82Rm1relZVQ3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmpGN1RyWHp2QmlhQ2U4azlyQkVrVmJIT0tTYzhWdmxjUVViQ0IzZ0ZRTlFYR3NreEcwOHZVVmlGQTJVczJtNFI3RWFRZXhON1lnMFBiSmFDMU05QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicCtvSmRJL2ZiaXlESlYzL0pKeW1IZFJ6bU5NRmF2NVQ0WWR0NDZRZHluaWhnTTB4czNCelZMSE5CazMrRXIrUDBmTGZPN253dHI3Vy9tejZFMmxIQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0ODM5NTkxMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MDMwOTYwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ,  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
