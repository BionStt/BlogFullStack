import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
    selector:'post',
    templateUrl:'app/post/view/post.html',
    styleUrls:['app/post/style/post.css']
    
})
export class Post {
    // input opject for this component
    @Input() post = null;
    // output event for this component
    @Output() likeAction = new EventEmitter();

    constructor(){}

    toggelLike(){
        this.post.isLike=!this.post.isLike;
        this.likeAction.emit({post : this.post});
    }

}