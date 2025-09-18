// src/global.d.ts
declare module "*.jsx" {
    import React from "react";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component: React.ComponentType<any>;
    export default component;
}
