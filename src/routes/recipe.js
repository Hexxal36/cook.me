import IndexPage from '../pages/common/index';
import RecipeForm from '../pages/recipes/form';
import RecipeShow from '../pages/recipes/show';

export default [
    {
        path: '/recipe/create',
        component: RecipeForm,
        auth: true,
    },
    {
        path: '/recipe/search/:query',
        component: IndexPage,
        auth: true,
    },
    {
        path: '/recipe/edit/:id',
        component: RecipeForm,
        auth: true,
    },
    {
        path: '/recipe/user/:username',
        component: IndexPage,
        auth: false,
    },
    {
        path: '/recipe/:id',
        component: RecipeShow,
        auth: false,
    }
]