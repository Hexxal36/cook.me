import RecipeForm from '../pages/recipes/form';
import RecipeShow from '../pages/recipes/show';

export default [
    {
        path: '/recipe/create',
        component: RecipeForm,
    },
    {
        path: '/recipe/:id',
        component: RecipeShow,
    }
]