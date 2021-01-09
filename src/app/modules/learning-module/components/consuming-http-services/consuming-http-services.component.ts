import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/modules/learning-module/services/post.service';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';

@Component({
  selector: 'app-consuming-http-services',
  templateUrl: './consuming-http-services.component.html',
  styleUrls: ['./consuming-http-services.component.scss']
})
export class ConsumingHttpServicesComponent implements OnInit {
    posts: any[];

    constructor(private service: PostService) {

    }

    ngOnInit() {
        this.service.getAll()
            .subscribe(posts => this.posts = posts);
        // deleted the ErrorHandler because we what to handle the error globally
    }

    createPost(inputTitle: HTMLInputElement) {
        const post = { title: inputTitle.value };
        this.posts.splice(0, 0, post);

        inputTitle.value = '';
        this.service.create(post)
        .subscribe(
            newPost => {
                post['id'] = newPost.id;
                console.log(newPost);
            },
            (error: AppError) => {
                this.posts.splice(0, 1); // delete previously added item if the HTTP server call fails
                if (error instanceof BadInput) {
                // this.form.setErrors(error.originalError
                } else {
                    throw error;
                }
            }
        );
    }

    updatePost(post) {
        this.service.update(post)
            .subscribe(
                updatedPost => { console.log(updatedPost); }
            );
    }

    deletePost(post) {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id)
            .subscribe(
                null,
                (error: AppError) => {
                    this.posts.splice(index, 0, post);
                    if (error instanceof NotFoundError) {
                        alert('This post was already deleted');
                    } else {
                        throw error;
                    }
                }
            );
    }
}
