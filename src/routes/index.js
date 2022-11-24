import Home from '~/page/Home';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import { HeaderOnly } from '~/components/Layout';
// Dành cho layout k cần login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
// Dành cho layout  cần login
const privateRoutes = [];
export { privateRoutes, publicRoutes };
