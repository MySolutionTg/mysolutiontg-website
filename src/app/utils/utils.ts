import {ActivatedRoute, Router} from "@angular/router";

export class Utils {

  constructor(private route: ActivatedRoute, private router: Router) {}

  pushRoute(routeName: string, id?: string | number) {
    if (id != null)
      this.router.navigate([routeName, {id: id}]);
    else
      this.router.navigate([routeName]);
  }
}
