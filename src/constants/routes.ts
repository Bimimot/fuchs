import AboutSection from "sections/AboutSection.vue";

export enum RoutesIds {
    Persons = "persons",
    About = "about",
    Price = "price",
    Review = "review",
};

export const routes = [
    {
        id: RoutesIds.Persons,
        headerTitle: "Кто мы",
        // component: null,
    },
    {
        id: RoutesIds.About,
        headerTitle: "О занятиях",
        component: AboutSection,
    },
    {
        id: RoutesIds.Price,
        headerTitle: "Стоимость",
        // component: "Стоимость",
    },
    {
        id: RoutesIds.Review,
        headerTitle: "Отзывы",
        // component: "Отзывы",
    },
];