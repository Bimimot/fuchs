import AboutSection from "sections/AboutSection.vue";
import PriceSection from "sections/PriceSection.vue";
import PersonSection from "sections/PersonSection.vue";

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
        component: PersonSection,
    },
    {
        id: RoutesIds.About,
        headerTitle: "О занятиях",
        component: AboutSection,
    },
    {
        id: RoutesIds.Price,
        headerTitle: "Стоимость",
        component: PriceSection,
    },
    {
        id: RoutesIds.Review,
        headerTitle: "Отзывы",
        // component: "Отзывы",
    },
];