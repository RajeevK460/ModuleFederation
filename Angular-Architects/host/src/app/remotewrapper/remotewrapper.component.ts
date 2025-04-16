// remote-wrapper.component.ts
import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';

export interface RemoteConfig {
  remoteName: string;        // e.g. "sharedui"
  exposedModule: string;     // e.g. "./Button"
  componentName: string;     // e.g. "ButtonComponent"
}

@Component({
  selector: 'app-remote-wrapper',
  template: `<ng-template #vc></ng-template>`
})
export class RemoteWrapperComponent implements OnInit {
  @Input() remoteConfig!: RemoteConfig;
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;
  componentRef?: ComponentRef<any>;

  async ngOnInit() {
    try {
      const moduleExports = await loadRemoteModule({
        remoteName: this.remoteConfig.remoteName,
        exposedModule: this.remoteConfig.exposedModule
      });
      const componentToLoad = moduleExports[this.remoteConfig.componentName];
      if (!componentToLoad) {
        throw new Error(`Component ${this.remoteConfig.componentName} not found`);
      }
      this.componentRef = this.vc.createComponent(componentToLoad);
    } catch (error) {
      console.error('Error loading remote component:', error);
    }
  }
}
