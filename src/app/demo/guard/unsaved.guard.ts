import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { RouteDemoMainComponent } from '../route-demo/route-demo-main/route-demo-main.component';

export class UnsavedGuard implements CanDeactivate<RouteDemoMainComponent> {
    canDeactivate(component: RouteDemoMainComponent) {
        return window.confirm('确定要离开吗？');
    }
}
