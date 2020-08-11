import IndexPage from '../pages/common/index';
import RecipeForm from '../pages/recipes/form';
import RecipeShow from '../pages/recipes/show';

export default [
    {
        path: '/recipe/create',
        component: RecipeForm,
    },
    {
        path: '/recipe/edit/:id',
        component: RecipeForm,
    },
    {
        path: '/recipe/user/:username',
        component: IndexPage,
    },
    {
        path: '/recipe/:id',
        component: RecipeShow,
    }
]