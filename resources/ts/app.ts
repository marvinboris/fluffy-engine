export { };

declare global {
    interface Window {
        CORS: string;
        PREFIX: string;
        COLORS: string[];
        APP_PRIMARY_COLOR: string;
        APP_SECONDARY_COLOR: string;
    }
}

import './bootstrap.ts';
import './src';