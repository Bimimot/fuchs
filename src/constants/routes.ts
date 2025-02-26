export enum RoutesIds {
    About = "about",
    Price = "price",
    Review = "review",
};

export const routes = [
    {
        id: RoutesIds.About,
        headerTitle: "О занятиях",
        component: "О занятиях",
    },
    {
        id: RoutesIds.Price,
        headerTitle: "Стоимость",
        component: "Стоимость",
    },
    {
        id: RoutesIds.Review,
        headerTitle: "Отзывы",
        component: "Отзывы",
    },
];