import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subject, map } from "rxjs";
import { UserService } from "../user/user.service";



@Injectable({ providedIn: 'root' })

export class NonAuthActivated implements CanActivate, OnDestroy {
    private ngUnsubscribe = new Subject<void>();

    constructor(private userService: UserService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return new Promise<boolean | UrlTree>
        
        ((resolve) => {
            
            this.userService.user$.pipe(
                map((user) => {                   

                    if (!user) {
                        resolve(true);
                    } else {
                        resolve(this.router.navigate(['/home']));
                    }
                })
            ).subscribe({
                next: () => { },
                error: (error) => {
                    console.log(`Error: ${error}`);
                }
            });
        })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}