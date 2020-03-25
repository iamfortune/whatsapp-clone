import Moment from 'moment';
import { Controller } from "angular-ecmascript/module-helpers";
import { Chats } from "../../../lib/collections";

export default class ChatsCtrl extends Controller {
                 constructor() {
                   super(...arguments);

                   this.helpers({
                     data() {
                       return Chats.find();
                     }
                   });

                   this.data = [
                     {
                       _id: 0,
                       name: "Divine Philip",
                       picture:
                         "https://randomuser.me/api/portraits/thumb/men/1.jpg",
                       lastMessage: {
                         text: "Guy, come back to Aba, corona virus dey",
                         timestamp: Moment()
                           .subtract(1, "hours")
                           .toDate()
                       }
                     },
                     {
                       _id: 1,
                       name: "Francy Ana",
                       picture:
                         "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
                       lastMessage: {
                         text: "i love you...",
                         timestamp: Moment()
                           .subtract(2, "hours")
                           .toDate()
                       }
                     },
                     {
                       _id: 2,
                       name: "Debbie DSC",
                       picture:
                         "https://randomuser.me/api/portraits/thumb/women/1.jpg",
                       lastMessage: {
                         text: "register for GSOC",
                         timestamp: Moment()
                           .subtract(1, "days")
                           .toDate()
                       }
                     },
                     {
                       _id: 3,
                       name: "Melvin",
                       picture:
                         "https://randomuser.me/api/portraits/thumb/women/2.jpg",
                       lastMessage: {
                         text: "Teach me React boss!",
                         timestamp: Moment()
                           .subtract(4, "days")
                           .toDate()
                       }
                     },
                     {
                       _id: 4,
                       name: "Isaac",
                       picture:
                         "https://randomuser.me/api/portraits/thumb/men/2.jpg",
                       lastMessage: {
                         text: "I'm in lagos bro.",
                         timestamp: Moment()
                           .subtract(2, "weeks")
                           .toDate()
                       }
                     }
                   ];
                 }
                 remove(chat) {
                   this.data.splice(this.data.indexOf(chat), 1);
                   Chats.remove(chat._id);
                 }
               }
 
 
ChatsCtrl.$name = 'ChatsCtrl';



ChatsCtrl.$name = "ChatsCtrl";
