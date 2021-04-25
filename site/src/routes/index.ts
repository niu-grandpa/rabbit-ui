import createRouter from './create';
import Loading from 'rabbitui/loading-bar';

const router = createRouter();

router.beforeEach((to, from, next) => {
    Loading.start();
    next();
});

router.afterEach(() => {
    window.scrollTo(0, 0);
    Loading.finish();
});

export default router;
