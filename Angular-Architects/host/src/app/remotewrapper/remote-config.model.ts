// remote-config.model.ts
export interface RemoteConfig {
    remoteEntry: string;       // URL to the remote's manifest or entry, e.g. "https://cdn.example.com/remoteEntry.js"
    remoteName: string;        // The unique remote name as defined in the remote’s federation config (e.g. "sharedui")
    exposedModule: string;     // The alias of the exposed module (e.g. "./Button")
    componentName: string;     // The name of the exported component in that module (e.g. "ButtonComponent")
  }